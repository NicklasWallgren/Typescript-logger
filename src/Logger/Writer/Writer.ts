module Log {

	/**
	 * The Logger_Writer class.
	 * @class
	 * @abstract
	 */
	export class Logger_Writer implements Logger_Writer_Interface {

		/** @member {string} */
		protected _logPattern: string;

		/**
		 *	Gets the log pattern.
		 *
		 * @return {string} The log pattern.
		 */
		public get logPattern() {
			return this._logPattern;
		}

		/**
		 *	Sets the log pattern.
		 *
		 * @param {string} logPattern  - The log pattern.
		 */
		public set logPattern(logPattern : string) {
			this._logPattern = logPattern;
		}

		/** 
		 * @inheritdoc 
		 * @abstract
		 */
		public write(logLevel : Logger_LogLevel, message : string, exception? : Exception): void {
			throw new Exception('Must be implemented by subclass!');
		}

	}

}