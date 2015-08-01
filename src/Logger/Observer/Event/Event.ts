/// <reference path="../Event/Log.ts" />
/// <reference path="../../LogLevel.ts" />
/// <reference path="../../../Exception.ts" />

module Log {

	export interface Logger_Observer_Event {
		(logEvent: Logger_Observer_Event_Log, logLevel: Logger_LogLevel, message : string|Object, exception? : Exception): any;   
	}

}