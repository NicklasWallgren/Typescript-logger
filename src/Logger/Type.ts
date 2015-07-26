module Log {

	/**
	 * Enum for loggers.
	 * @enum {LoggerType}
	 */
	export enum Logger_Type {
		/** The console logger value */
		CONSOLE,

		/** The null logger value */
		NULL
	}

	export module Logger_Type {

		export function parse(type : string): Logger_Type {
			return Logger_Type[type];
		}

		export function toString(loggerType : Logger_Type): string {
			return Logger_Type[loggerType];
		}

	}

}