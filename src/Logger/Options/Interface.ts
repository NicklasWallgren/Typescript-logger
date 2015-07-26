module Log {

	/**
	 * Interface for classes that represent logger options.
	 *
	 * @interface
	 */
	export interface Logger_Options_Interface {
		
		/**
		 * The log level.
		 * @var {Logger_LogLevel} logLevel
		 */
		logLevel: Logger_LogLevel;

		/**
		 * The log pattern.
		 * @var {string} logPattern.
		 */
		logPattern: string;

		/**
		 * The log writers.
		 * @var {Logger_Writer_Interface} log writer
		 */
		logWriters : Logger_Writer_Interface[];

		/**
		 * The log filters.
		 * @var {Logger_Filter_Interface[]} logFilters
		 */
		logFilters : Logger_Filter_Interface[];

		/**
		 * The log appenders.
		 * @var {Logger_Appender_Interface[]} logAppenders.
		 */
		logAppenders : Logger_Appender_Interface[];

	}

}
