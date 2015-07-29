module Log {

	/**
	 * The Logger_Options class.
	 * @class
	 */
	export class Logger_Options implements Logger_Options_Interface {
		
		/** @member {Logger_LogLevel} */
		protected _logLevel : Logger_LogLevel = Logger_LogLevel.INFO;
		/** @member {string} */
		protected _logPattern: string;
		/** @member {Logger_Writer_Interface[]} */
		protected _logWriters : Logger_Writer_Interface[] = [];
		/** @member {Logger_Filter_Interface[]} */
		protected _logFilters : Logger_Filter_Interface[] = [];
		/** @member {Logger_Appender_Interface[]} */
		protected _logAppenders : Logger_Appender_Interface[];

		/**
		 * @constructor
		 */
		constructor();

		/**
		 * @constructor
		 */
		constructor(options? : Logger_Options_Parameters_Interface) {
			// Check whether options is provided
			if (!options) {
				return;
			}			

			this._logLevel = options.logLevel;
			this._logPattern = options.logPattern;
			this._logWriters = options.logWriters;
			this._logFilters = options.logFilters;
			this._logAppenders = options.logAppenders;
		}

		/**
		 * Gets the log level {Logger_LogLevel}.
		 *
		 * @return {Logger_LogLevel} The loglevel.
		 */
		get logLevel(): Logger_LogLevel {
			return this._logLevel;
		}

		/**
		 * Sets the log level {Logger_LogLevel}
		 *
		 * @param {Logger_LogLevel} logLevel  - The log level.
		 */
		set logLevel(logLevel : Logger_LogLevel) {
			this._logLevel = logLevel;
		}

		/**
		 * Gets the log pattern.
		 *
		 * @return {string} The log pattern.
		 */
		get logPattern(): string {
			return this._logPattern;
		}

		/**
		 * Sets the log pattern.
		 *
		 * @param {string} logPattern  - The log pattern.
		 */
		set logPattern(logPattern : string) {
			this._logPattern = logPattern;
		}

		/**
		 * Gets the log writers {Logger_Writer_Interface[]}.
		 *
		 * @return {Logger_Writer_Interface[]} The log writers.
		 */
		get logWriters(): Logger_Writer_Interface[] {
			return this._logWriters;
		}

		/**
		 * Sets the log writers.
		 *
		 * @param {Logger_Writer_Interface[]} logWriters  - The log writers.
		 */
		set logWriters(logWriters : Logger_Writer_Interface[]) {
			this._logWriters = logWriters;
		}

		/**
		 * Gets the log filters {Logger_Filter_Interface[]}.
		 *
		 * @return {Logger_Filter_Interface[]} The log filters.
		 */
		get logFilters(): Logger_Filter_Interface[] {
			return this._logFilters;
		}

		/**
		 * Sets the log filters.
		 *
		 * @param {Logger_Filter_Interface[]} logFilters  - The log filters.
		 */
		set logFilters(logFilters : Logger_Filter_Interface[]) {
			this._logFilters = logFilters;
		}

		/**
		 * Gets the log appenders {Logger_Appender_Interface[]}.
		 *
		 * @return {Logger_Appender_Interface[]} The log appenders.
		 */
		get logAppenders(): Logger_Appender_Interface[] {
			return this._logAppenders;
		}

		/**
		 * Sets the log appenders.
		 *
		 * @param {Logger_Appender_Interface[]} logAppenders  - The log appenders.
		 */
		set logAppenders(logAppenders : Logger_Appender_Interface[]) {
			this._logAppenders = logAppenders;
		}

	}


}