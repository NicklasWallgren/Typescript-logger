module Log {

	/**
	 * Interface for classes that represent a log writer.
	 *
	 * @interface
	 */
	export interface Logger_Writer_Interface {

		/**
		 * The log pattern.
		 * @var {string} logPattern.
		 */
		logPattern: string;

		/**
		 *	The write method.
		 *
		 * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
		 * @param {string} message  - The message to be logged.
		 * @param {Exception} [exception] - The exception to be logged.
		 */
		write(logLevel : Logger_LogLevel, message: string, exception? : Exception): void;

	}


}
