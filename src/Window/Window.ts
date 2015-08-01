
/// <reference path="../Logger/Interface.ts" />
/// <reference path="../Logger/LogLevel.ts" />

module Log {

	/**
	 * The window error handler class.
	 * @class
	 */
	export class Window {

		/** 
		* @member {Logger_Interface[]}  
		* @static
		*/
		protected static _loggers : Logger_Interface[];

		/**
		 * Register a logger as error handler.
		 *
		 * @param {Logger_Interface} logger  - The logger.
		 */
		public static registerErrorHandler(logger : Logger_Interface): void {
			Window._loggers.push(logger);
		}

		/**
		 * Unregister a logger as error handler.
		 *
		 * @param {Logger_Interface} logger - The logger.
		 * @return {boolean} True if the logger was unregistred successfully, false otherwise.
		 */
		public static unregistrerErrorHandler(logger : Logger_Interface): boolean {
			var unregistred = true;

			// Get the index of the registred logger from the list of loggers
			var index = Window._loggers.indexOf(logger, 0);

			// Check whether a logger was found in the list of registred loggers
			if (index != undefined) {
			   Window._loggers.splice(index, 1);

			   unregistred = false;
			}

			return unregistred;
		}

		/**
		 * On error callback method.
		 *
		 * @param {any} errorMsg  - The error message.
		 * @param {string} url  - The url.
		 * @param {number} lineNumber  - The line number.
		 * @param {number} colNumber  - The col number.
		 * @param {any} error  - The stack trace error.
		 */
		public static onError(errorMsg: any, url: string, lineNumber: number, colNumber: number, error: { stack?: string } = null) : boolean {	
			// The window loggers
			var loggers : Logger_Interface[] = Window._loggers;

			// Iterate through the configured log writers
			for (var index in loggers) {
				// Get the loggers
				var logger : Logger_Interface = loggers[index];

				// Log the event
				logger.log(Logger_LogLevel.FATAL, {errorMsg, lineNumber, colNumber, error});
			}

			return false;
		}

		/**
		 * Gets the registred loggers {Logger[]}.
		 *
		 * @return {Logger[]} The registred loggers.
		 */
		public static get loggers(): Logger_Interface[] {
			return Window._loggers;
		}


	}

	(()=> { 
		// Check whether the variable window is available
		if (typeof window == "undefined") {
			return;
		}

        // Register a Window error event callback method
		window.onerror = Window.onError;
	})();

}