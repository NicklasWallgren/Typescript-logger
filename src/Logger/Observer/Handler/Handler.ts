/// <reference path="Interface.ts" />
/// <reference path="../Event/Event.ts" />
/// <reference path="../Event/Log.ts" />
/// <reference path="../../LogLevel.ts" />
/// <reference path="../../../Exception.ts" />

module Log {

	/**
	 * The Logger_Observer_Handler class.
	 * @class
	 */
	export class Logger_Observer_Handler implements Logger_Observer_Handler_Interface {

		/** @member {listeners} */
		protected _listeners : { [logEvent: number] : Logger_Observer_Event[] } = {};

		/** @inheritdoc */
		addListener(logEvent : Logger_Observer_Event_Log, callback : Logger_Observer_Event) : void {
			this._listeners[logEvent].push(callback);
		}

		/** @inheritdoc */
		dispatchEvent(logEvent : Logger_Observer_Event_Log, logLevel: Logger_LogLevel, message : string|Object, exception? : Exception) : void {
			// Get the list of log event listener
			var listeners : Logger_Observer_Event[] = this._listeners[logEvent];

			// Iterate through the list of listeners of the particular log event
			for (var index in listeners) {
				// Get the log event listener
				var listener : Logger_Observer_Event = listeners[index];

				// Dispatch the log event to the log event listener
				listener(logEvent, logLevel, message, exception);
			}
		}

	}

}
