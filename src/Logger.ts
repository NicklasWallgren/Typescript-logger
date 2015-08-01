
/// <reference path="Logger/Interface.ts" />
/// <reference path="Logger/LogLevel.ts" />
/// <reference path="Logger/Observer/Handler/Handler.ts" />
/// <reference path="Logger/Observer/Event/Log.ts" />
/// <reference path="Logger/Observer/Handler/Handler.ts" />
/// <reference path="Logger/Options/Interface.ts" />
/// <reference path="Logger/Writer/Interface.ts" />
/// <reference path="Logger/Filter/Interface.ts" />
/// <reference path="Logger/Appender/Interface.ts" />
/// <reference path="Exception.ts" />
/// <reference path="Utility/Type.ts" />

module Log {

	/**
	 * The Logger class.
	 * @class
	 */
	export class Logger extends Logger_Observer_Handler implements Logger_Interface {

		/** @member {Logger_Options_Interface} */
		protected logOptions : Logger_Options_Interface;
		
		constructor(logOptions : Logger_Options_Interface) {
			super();

			this.logOptions = logOptions;
		}

		/** @inheritdoc */
		public info(message : string|Object, exception?: Exception): void {
			this.log(Logger_LogLevel.INFO, message, exception);
		}

		/** @inheritdoc */
		public warn(message : string|Object, exception?: Exception): void {
			this.log(Logger_LogLevel.WARN, message, exception);
		}

		/** @inheritdoc */
		public debug(message : string|Object, exception?: Exception): void {
			this.log(Logger_LogLevel.DEBUG, message, exception);
		}

		/** @inheritdoc */
		public error(message : string|Object, exception?: Exception): void {
			this.log(Logger_LogLevel.ERROR, message, exception);
		}

		/** @inheritdoc */
		public fatal(message : string|Object, exception?: Exception): void {
			this.log(Logger_LogLevel.FATAL, message, exception);
		}
		
		/** @inheritdoc */
		public log(logLevel : Logger_LogLevel, message : string|Object, exception?: Exception): void {
			// Check if the log event is loggable
			if (!this.isLoggable(logLevel, message, exception)) {
				return;
			}

			// Check if the message is of type Object
			if (Utility_Type.isObject(message)) {
				// Log the message object
				this.logObject(logLevel, <Object> message, exception);
			}
			// Check if the message is of type string
			else if(Utility_Type.isString(message)) {
				// Log the message
				this.logMessage(logLevel, <string> message, exception);
			}


		}

		/** @inheritdoc */
		public setOptions(logOptions : Logger_Options_Interface): void {
			this.logOptions = logOptions;
		}

		/** @inheritdoc */
		public addLogWriter(logWriter : Logger_Writer_Interface): void {
			this.logOptions.logWriters.push(logWriter);
		}

		/** @inheritdoc */
		public addLogFilter(logFilter : Logger_Filter_Interface): void {
			this.logOptions.logFilters.push(logFilter);
		}

		/** @inheritdoc */
		public addLogAppender(logAppender : Logger_Appender_Interface): void {
			this.logOptions.logAppenders.push(logAppender);
		}
		
		/**
		 * Logs a message of type string.
		 *
		 * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		private logMessage(logLevel : Logger_LogLevel, message : string, exception?: Exception): void {
			this.dispatchToWriters(logLevel, message, exception);
		}

		/**
		 * Logs a message of type Object.
		 *
		 * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
		 * @param {Object} object  - The object to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		private logObject(logLevel : Logger_LogLevel, object : Object, exception?: Exception): void {
			this.dispatchToWriters(logLevel, object.toString(), exception);
		}

		/**
		 * Dispatches the log event to the configured log writers
		 *
		 * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		private dispatchToWriters(logLevel : Logger_LogLevel, message : string, exception : Exception): void {
			// Get the configured log writers
			var logWriters : Logger_Writer_Interface[] = this.logOptions.logWriters;

			// Dispatch event to listeners
			this.dispatchEventToListeners(Logger_Observer_Event_Log.BEFORE_LOG, logLevel, message, exception);

			// Iterate through the configured log writers
			for (var logWriterKey in logWriters) {
				// Get the log writer
				var logWriter = logWriters[logWriterKey];

				// Dispatch the log event
				logWriter.write(logLevel, message, exception);
			}

			// Dispatch event to listeners
			this.dispatchEventToListeners(Logger_Observer_Event_Log.AFTER_LOG, logLevel, message, exception);
		}

		/**
		 * Dispatches the log event to the event listeners.
		 *
		 * @param {Logger_Observer_Event_Log} logEvent  - The log event.
		 * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		private dispatchEventToListeners(logEvent : Logger_Observer_Event_Log, logLevel: Logger_LogLevel, message : string|Object, exception? : Exception): void {
			super.dispatchEvent(logEvent, logLevel, message, exception);
		}

		/**
		 * Check if the log event is loggable
		 *
		 * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
		 * @return {boolean} If a log event is loggable
		 */
		private isLoggable(logLevel : Logger_LogLevel, message : string|Object, exception? : Exception): boolean {
			// Check if the given log level is loggable
			if (logLevel > this.logOptions.logLevel) {
				return false;
			}

			// Get the configured log filters
			var logFilters : Logger_Filter_Interface[] = this.logOptions.logFilters;

			// Iterate through the configured log filters
			for (var logFilterKey in logFilters) {
				// Get the log filter
				var logFilter = logFilter[logFilterKey];

				// Check if the message is loggable
				if (!logFilter.isValid(logLevel, message, exception)) {

					// Dispatch event to listeners
					this.dispatchEventToListeners(Logger_Observer_Event_Log.FILTER_FILTERED, logLevel, message, exception);

					return false;
				}
			}

			// Dispatch event to listeners
			this.dispatchEventToListeners(Logger_Observer_Event_Log.FILTER_ACCEPTED, logLevel, message, exception);

			return true;
		}

	}
}
