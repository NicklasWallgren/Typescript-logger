module Log {

	/**
	 * Interface for classes that represent a log filter.
	 *
	 * @interface
	 */
	export interface Logger_Filter_Interface {

		/**
		 *	Returns True if the log filter fulfilled, False otherwise.
		 *
		 * @param {Logger_LogLevel} logLevel  - The log level of the log event.
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 * @return {boolean} True if the log filter fulfilled, False otherwise.
		 */
		isValid(logLevel : Logger_LogLevel, message: string|Object, exception : Exception): boolean;

	}


}