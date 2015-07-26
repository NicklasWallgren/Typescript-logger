module Log {

	/**
	 * Enum for log levels.
	 * @enum {Logger_LogLevel}
	 */
	export enum Logger_LogLevel {

		/** The info log level value */
		INFO,

		/** The notice log level value */
		NOTICE,

		/** The warn log level value */
		WARN,

		/** The debug log level value */
		DEBUG,

		/** The error log level value */
		ERROR,

		/** The fatal log level value */
		FATAL,
		
	};

	export module Logger_LogLevel {

		export function parse(type : string): Logger_LogLevel {
			return Logger_Type[type];
		}

		export function toString(logLevel : Logger_LogLevel): string {
			return Logger_LogLevel[logLevel];
		}

	}

}

