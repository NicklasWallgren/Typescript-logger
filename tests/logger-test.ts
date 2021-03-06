
/// <reference path="../src/bootstrap.ts" />

/**
* Example
* Basic console logger.
*/

// Create the logger options
var options : Log.Logger_Options_Interface = new Log.Logger_Options();

// Create a basic console logger
var logger : Log.Logger = Log.Logger_Factory.build(Log.Logger_Type.CONSOLE, options);

// Log a simple message
logger.info("A simple message to be logged");



/**
* Log messages.
*/

// Log a simple object
logger.info({"key" : "value"});

// Log a simple string
logger.info("A simple message to be logged");

// Log a object using a custom toString method
var object = {"key" : "value"};

object.toString = function(): string {
	return `Key = ${this.key}`;
}

logger.info(object);

// Log a simple message with exception object
logger.info("A simple message to be logged", new Log.Exception("Exception message"));



// Log levels
// Options
// Callback method
// Add Filters
// Window error callback

