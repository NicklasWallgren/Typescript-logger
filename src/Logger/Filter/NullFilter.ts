module Log {

	/**
	 * The NullFilter class.
	 * @class
	 */
	export class Logger_Filter_NullFilter implements Logger_Filter_Interface {

		/** @inheritdoc */
		public isValid(logLevel : Logger_LogLevel, message: string|Object, exception : Exception): boolean {
			return false;
		}

	}


}