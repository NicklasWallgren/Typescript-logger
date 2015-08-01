/// <reference path="../../Writer/Interface.ts" />
/// <reference path="../../Filter/Interface.ts" />
/// <reference path="../../Appender/Interface.ts" />
/// <reference path="../../LogLevel.ts" />

module Log {

	/**
	 * Interface for classes that represent logger parameter options.
	 *
	 * @interface
	 */
	export interface Logger_Options_Parameters_Interface {
		
		/**
		 * The log level.
		 * @var {Logger_LogLevel} logLevel
		 */
		logLevel: Logger_LogLevel;

		/**c
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
