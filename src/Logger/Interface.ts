/// <reference path="../Exception.ts" />
/// <reference path="../Logger/Options/Interface.ts" />
/// <reference path="../Logger/Writer/Interface.ts" />
/// <reference path="../Logger/Filter/Interface.ts" />
/// <reference path="../Logger/Appender/Interface.ts" />

module Log {

	/**
	 * Interface for classes that represent a logger.
	 *
	 * @interface
	 */
	export interface Logger_Interface {

		/**
		 * Logs a message with the log level INFO .
		 *
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		info(message : string, exception?: Exception): void;

		/**
		 * Logs a object with the log level INFO. 
		 *
		 * @param {Object} logObject - The log object to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		info(logObject : Object, exception?: Exception);

		/**
		 * Logs a message with the log level WARN.
		 *
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		warn(message : string, exception?: Exception): void;


		/**
		 * Logs a object with the log level WARN. 
		 *
		 * @param {Object} logObject - The log object to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		warn(logObject : Object, exception?: Exception): void;


		/**
		 * Logs a message with the log level DEBUG.
		 *
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		debug(message : string, exception?: Exception): void;

		/**
		 * Logs a object with the log level DEBUG.
		 *
		 * @param {Object} logObject - The log object to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		debug(logObject : Object, exception?: Exception): void;

		/**
		 * Logs a message with the log level ERROR.
		 *
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		error(message : string, exception?: Exception): void;

		/**
		 * Logs a object with the log level ERROR. 
		 *
		 * @param {Object} logObject - The log object to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		error(logObject : Object, exception?: Exception): void;

		/**
		 * Logs a message with the log level FATAL.
		 *
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		fatal(message : string, exception?: Exception): void;

		/**
		 * Logs a object with the log level FATAL.
		 *
		 * @param {Object} logObject - The log object to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		fatal(logObject : Object, exception?: Exception): void;

		/**
		 * Logs a message.
		 *
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		log(level : Logger_LogLevel, message : string, exception?: Exception): void;

		/**
		 * Logs a message.
		 *
		 * @param {Object} logObject  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		log(level : Logger_LogLevel, logObject : Object, exception?: Exception): void;

		/**
		 * Sets the logger options.
		 *
		 * @param {Logger_Options_Interface} logOptions  - The logger options.
		 */
		setOptions(logOptions : Logger_Options_Interface): void;

		/**
		 * Add a log writer.
		 *
		 * @param {Logger_Writer_Interface} logWriter  - The log writer to be added.
		 */
		addLogWriter(logWriter : Logger_Writer_Interface): void;

		/**
		 * Add a log filter.
		 *
		 * @param {Logger_Filter_Interface} logFilter  - The log filter to be added.
		 */
		addLogFilter(logFilter : Logger_Filter_Interface): void;

		/**
		 * Add a log appender.
		 *
		 * @param {Logger_Appender_Interface} logAppender  - The log appender to be added.
		 */
		addLogAppender(logAppender : Logger_Appender_Interface): void;

	}

}