/// <reference path="../Type.ts" />
/// <reference path="../Options/Interface.ts" />
/// <reference path="../../Logger/Interface.ts" />
/// <reference path="../../Logger.ts" />
/// <reference path="../../Logger/Writer/Console/Writer.ts" />

module Log {

	/**
	 * The Logger_Factory class.
	 * @class
	 */
	export class Logger_Factory {

		public static build(loggerType : Logger_Type, logOptions : Logger_Options_Interface): Logger {
			// Create the logger object
			var logger : Logger = new Logger(logOptions);

			switch(loggerType) {
				case Logger_Type.CONSOLE:
					var writter : Logger_Writer_Interface = new Logger_Writer_Console_Writer();

					logger.addLogWriter(writter);

					break;

				case Logger_Type.NULL:

					break;
			}

			return logger;
		}

	}

}
