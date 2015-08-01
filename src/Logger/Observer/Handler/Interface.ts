/// <reference path="../Event/Log.ts" />
/// <reference path="../Event/Event.ts" />
/// <reference path="../../LogLevel.ts" />
/// <reference path="../../../Exception.ts" />

module Log {
	
	/**
	 * Interface for classes that represent a log observer handler.
	 *
	 * @interface
	 */
	export interface Logger_Observer_Handler_Interface {

		/**
		 * Add a log event observer.
		 *
		 * @param {Logger_Observer_Event_Log} logEvent  - The log event.
		 * @param {Logger_Observer_Event} callback  - The log event observer
		 */
		addListener(logEvent : Logger_Observer_Event_Log, callback : Logger_Observer_Event) : void;

		/**
		 * Dispatch log event to the observers.
		 *
		 * @param {Logger_Observer_Event_Log} logEvent  - The log event.
		 * @param {Logger_LogLevel} logLevel  - The log level.
		 * @param {string|Object} message  - The log level.
		 * @param {Exception} [exception]  - The exception
		 */
		dispatchEvent(logEvent : Logger_Observer_Event_Log, logLevel: Logger_LogLevel, message : string|Object, exception? : Exception) : void;

	}

}