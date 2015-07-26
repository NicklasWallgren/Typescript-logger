module Log {

	/**
	 * The ConsoleLogger_Writer class.
	 * @class
	 */
	export class Logger_Writer_Console_Writer extends Logger_Writer {

		/** @inheritdoc */
		public write(logLevel : Logger_LogLevel, message : string, exception? : Exception): void {

			// Check whether a exception object is provided
			if (exception) {
				console.log(`${new Date().toLocaleDateString()}: <${Logger_LogLevel.toString(logLevel)}> Message: ${message} ${exception}`);
			} else {
				console.log(`${new Date().toLocaleDateString()}: <${Logger_LogLevel.toString(logLevel)}> Message: ${message}`);
			}
			
		}

	}

}
