module Log {

	/**
	 * The Utility_Type class.
	 * @class
	 */
	export class Utility_Type {

		/** 
		 * @member {string}
    	 * @default
		 * @static
		 */
		protected static TYPE_STRING = 'string';

		/**
		 * Check if the object is of a type string.
		 *
		 * @param {any} object  - The object.
		 * @return {boolean} If a object is of type string
		 */
		public static isString(object : any): boolean {
			return (typeof object === Utility_Type.TYPE_STRING);
		}

		/**
		 * Check if the object is of type Object.
		 *
		 * @param {any} object  - The object.
		 * @return {boolean} If a object is of type Object.
		 */
		public static isObject(object : any): boolean {
			return (object instanceof Object);
		}

	}


}