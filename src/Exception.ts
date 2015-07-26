module Log {

    export declare class Error {
        public name: string;
        public message: string;
        public stack: string;

        constructor(message?: string);
    }

    export class Exception extends Error {

    	protected static CLASS_NAME = "Exception";

        constructor(message: string) {
            super(message);

            this.name = Exception.CLASS_NAME;
            this.message = message;
            this.stack = (<any>new Error()).stack;
        }

        public toString(): string {
            return `${this.name}: '${this.message}' ${this.stack}`;
        }
    }
}

















