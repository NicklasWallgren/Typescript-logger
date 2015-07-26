module Log {

	/**
	 * Enum for log events.
	 * @enum {Logger_Observer_Event_Log}
	 */
	export enum Logger_Observer_Event_Log {

		/** The before log event value */
		BEFORE_LOG,

		/** The after log event value */
		AFTER_LOG,

		/** The filter recected event value */
		FILTER_RECECTED,

		/** The filter accepted event value */
		FILTER_ACCEPTED,
		
	}

}