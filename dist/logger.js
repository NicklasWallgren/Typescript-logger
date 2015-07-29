var Log;
(function (Log) {
    /**
     * Enum for log levels.
     * @enum {Logger_LogLevel}
     */
    (function (Logger_LogLevel) {
        /** The info log level value */
        Logger_LogLevel[Logger_LogLevel["INFO"] = 0] = "INFO";
        /** The notice log level value */
        Logger_LogLevel[Logger_LogLevel["NOTICE"] = 1] = "NOTICE";
        /** The warn log level value */
        Logger_LogLevel[Logger_LogLevel["WARN"] = 2] = "WARN";
        /** The debug log level value */
        Logger_LogLevel[Logger_LogLevel["DEBUG"] = 3] = "DEBUG";
        /** The error log level value */
        Logger_LogLevel[Logger_LogLevel["ERROR"] = 4] = "ERROR";
        /** The fatal log level value */
        Logger_LogLevel[Logger_LogLevel["FATAL"] = 5] = "FATAL";
    })(Log.Logger_LogLevel || (Log.Logger_LogLevel = {}));
    var Logger_LogLevel = Log.Logger_LogLevel;
    ;
    var Logger_LogLevel;
    (function (Logger_LogLevel) {
        function parse(type) {
            return Log.Logger_Type[type];
        }
        Logger_LogLevel.parse = parse;
        function toString(logLevel) {
            return Logger_LogLevel[logLevel];
        }
        Logger_LogLevel.toString = toString;
    })(Logger_LogLevel = Log.Logger_LogLevel || (Log.Logger_LogLevel = {}));
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The Logger_Options class.
     * @class
     */
    var Logger_Options = (function () {
        /**
         * @constructor
         */
        function Logger_Options(options) {
            /** @member {Logger_LogLevel} */
            this._logLevel = Log.Logger_LogLevel.INFO;
            /** @member {Logger_Writer_Interface[]} */
            this._logWriters = [];
            /** @member {Logger_Filter_Interface[]} */
            this._logFilters = [];
            // Check whether options is provided
            if (!options) {
                return;
            }
            this._logLevel = options.logLevel;
            this._logPattern = options.logPattern;
            this._logWriters = options.logWriters;
            this._logFilters = options.logFilters;
            this._logAppenders = options.logAppenders;
        }
        Object.defineProperty(Logger_Options.prototype, "logLevel", {
            /**
             * Gets the log level {Logger_LogLevel}.
             *
             * @return {Logger_LogLevel} The loglevel.
             */
            get: function () {
                return this._logLevel;
            },
            /**
             * Sets the log level {Logger_LogLevel}
             *
             * @param {Logger_LogLevel} logLevel  - The log level.
             */
            set: function (logLevel) {
                this._logLevel = logLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Logger_Options.prototype, "logPattern", {
            /**
             * Gets the log pattern.
             *
             * @return {string} The log pattern.
             */
            get: function () {
                return this._logPattern;
            },
            /**
             * Sets the log pattern.
             *
             * @param {string} logPattern  - The log pattern.
             */
            set: function (logPattern) {
                this._logPattern = logPattern;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Logger_Options.prototype, "logWriters", {
            /**
             * Gets the log writers {Logger_Writer_Interface[]}.
             *
             * @return {Logger_Writer_Interface[]} The log writers.
             */
            get: function () {
                return this._logWriters;
            },
            /**
             * Sets the log writers.
             *
             * @param {Logger_Writer_Interface[]} logWriters  - The log writers.
             */
            set: function (logWriters) {
                this._logWriters = logWriters;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Logger_Options.prototype, "logFilters", {
            /**
             * Gets the log filters {Logger_Filter_Interface[]}.
             *
             * @return {Logger_Filter_Interface[]} The log filters.
             */
            get: function () {
                return this._logFilters;
            },
            /**
             * Sets the log filters.
             *
             * @param {Logger_Filter_Interface[]} logFilters  - The log filters.
             */
            set: function (logFilters) {
                this._logFilters = logFilters;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Logger_Options.prototype, "logAppenders", {
            /**
             * Gets the log appenders {Logger_Appender_Interface[]}.
             *
             * @return {Logger_Appender_Interface[]} The log appenders.
             */
            get: function () {
                return this._logAppenders;
            },
            /**
             * Sets the log appenders.
             *
             * @param {Logger_Appender_Interface[]} logAppenders  - The log appenders.
             */
            set: function (logAppenders) {
                this._logAppenders = logAppenders;
            },
            enumerable: true,
            configurable: true
        });
        return Logger_Options;
    })();
    Log.Logger_Options = Logger_Options;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * Enum for loggers.
     * @enum {LoggerType}
     */
    (function (Logger_Type) {
        /** The console logger value */
        Logger_Type[Logger_Type["CONSOLE"] = 0] = "CONSOLE";
        /** The null logger value */
        Logger_Type[Logger_Type["NULL"] = 1] = "NULL";
    })(Log.Logger_Type || (Log.Logger_Type = {}));
    var Logger_Type = Log.Logger_Type;
    var Logger_Type;
    (function (Logger_Type) {
        function parse(type) {
            return Logger_Type[type];
        }
        Logger_Type.parse = parse;
        function toString(loggerType) {
            return Logger_Type[loggerType];
        }
        Logger_Type.toString = toString;
    })(Logger_Type = Log.Logger_Type || (Log.Logger_Type = {}));
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The Logger_Factory class.
     * @class
     */
    var Logger_Factory = (function () {
        function Logger_Factory() {
        }
        Logger_Factory.build = function (loggerType, logOptions) {
            // Create the logger object
            var logger = new Log.Logger(logOptions);
            switch (loggerType) {
                case Log.Logger_Type.CONSOLE:
                    var writter = new Log.Logger_Writer_Console_Writer();
                    logger.addLogWriter(writter);
                    break;
                case Log.Logger_Type.NULL:
                    break;
            }
            return logger;
        };
        return Logger_Factory;
    })();
    Log.Logger_Factory = Logger_Factory;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The Logger_Writer class.
     * @class
     * @abstract
     */
    var Logger_Writer = (function () {
        function Logger_Writer() {
        }
        Object.defineProperty(Logger_Writer.prototype, "logPattern", {
            /**
             * Gets the log pattern.
             *
             * @return {string} The log pattern.
             */
            get: function () {
                return this._logPattern;
            },
            /**
             * Sets the log pattern.
             *
             * @param {string} logPattern  - The log pattern.
             */
            set: function (logPattern) {
                this._logPattern = logPattern;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @inheritdoc
         * @abstract
         */
        Logger_Writer.prototype.write = function (logLevel, message, exception) {
            throw new Log.Exception('Must be implemented by subclass!');
        };
        return Logger_Writer;
    })();
    Log.Logger_Writer = Logger_Writer;
})(Log || (Log = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Log;
(function (Log) {
    /**
     * The ConsoleLogger_Writer class.
     * @class
     */
    var Logger_Writer_Console_Writer = (function (_super) {
        __extends(Logger_Writer_Console_Writer, _super);
        function Logger_Writer_Console_Writer() {
            _super.apply(this, arguments);
        }
        /** @inheritdoc */
        Logger_Writer_Console_Writer.prototype.write = function (logLevel, message, exception) {
            // Check whether a exception object is provided
            if (exception) {
                console.log(new Date().toLocaleDateString() + ": <" + Log.Logger_LogLevel.toString(logLevel) + "> Message: " + message + " " + exception);
            }
            else {
                console.log(new Date().toLocaleDateString() + ": <" + Log.Logger_LogLevel.toString(logLevel) + "> Message: " + message);
            }
        };
        return Logger_Writer_Console_Writer;
    })(Log.Logger_Writer);
    Log.Logger_Writer_Console_Writer = Logger_Writer_Console_Writer;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The NullFilter class.
     * @class
     */
    var Logger_Filter_NullFilter = (function () {
        function Logger_Filter_NullFilter() {
        }
        /** @inheritdoc */
        Logger_Filter_NullFilter.prototype.isValid = function (logLevel, message, exception) {
            return false;
        };
        return Logger_Filter_NullFilter;
    })();
    Log.Logger_Filter_NullFilter = Logger_Filter_NullFilter;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * Enum for log events.
     * @enum {Logger_Observer_Event_Log}
     */
    (function (Logger_Observer_Event_Log) {
        /** The before log event value */
        Logger_Observer_Event_Log[Logger_Observer_Event_Log["BEFORE_LOG"] = 0] = "BEFORE_LOG";
        /** The after log event value */
        Logger_Observer_Event_Log[Logger_Observer_Event_Log["AFTER_LOG"] = 1] = "AFTER_LOG";
        /** The filter filtered event value */
        Logger_Observer_Event_Log[Logger_Observer_Event_Log["FILTER_FILTERED"] = 2] = "FILTER_FILTERED";
        /** The filter accepted event value */
        Logger_Observer_Event_Log[Logger_Observer_Event_Log["FILTER_ACCEPTED"] = 3] = "FILTER_ACCEPTED";
    })(Log.Logger_Observer_Event_Log || (Log.Logger_Observer_Event_Log = {}));
    var Logger_Observer_Event_Log = Log.Logger_Observer_Event_Log;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The Logger_Observer_Handler class.
     * @class
     */
    var Logger_Observer_Handler = (function () {
        function Logger_Observer_Handler() {
            /** @member {listeners} */
            this._listeners = {};
        }
        /** @inheritdoc */
        Logger_Observer_Handler.prototype.addListener = function (logEvent, callback) {
            this._listeners[logEvent].push(callback);
        };
        /** @inheritdoc */
        Logger_Observer_Handler.prototype.dispatchEvent = function (logEvent, logLevel, message, exception) {
            // Get the list of log event listener
            var listeners = this._listeners[logEvent];
            // Iterate through the list of listeners of the particular log event
            for (var index in listeners) {
                // Get the log event listener
                var listener = listeners[index];
                // Dispatch the log event to the log event listener
                listener(logEvent, logLevel, message, exception);
            }
        };
        return Logger_Observer_Handler;
    })();
    Log.Logger_Observer_Handler = Logger_Observer_Handler;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The LogAppender class.
     * @class
     */
    var Logger_Appender = (function () {
        function Logger_Appender() {
        }
        return Logger_Appender;
    })();
    Log.Logger_Appender = Logger_Appender;
})(Log || (Log = {}));
Object.prototype.toString = function () {
    return JSON.stringify(this);
};
var Log;
(function (Log) {
    /**
     * The Utility_Type class.
     * @class
     */
    var Utility_Type = (function () {
        function Utility_Type() {
        }
        /**
         * Check if the object is of a type string.
         *
         * @param {any} object  - The object.
         * @return {boolean} If a object is of type string
         */
        Utility_Type.isString = function (object) {
            return (typeof object === Utility_Type.TYPE_STRING);
        };
        /**
         * Check if the object is of type Object.
         *
         * @param {any} object  - The object.
         * @return {boolean} If a object is of type Object.
         */
        Utility_Type.isObject = function (object) {
            return (object instanceof Object);
        };
        /**
         * @member {string}
         * @default
         * @static
         */
        Utility_Type.TYPE_STRING = 'string';
        return Utility_Type;
    })();
    Log.Utility_Type = Utility_Type;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The window error handler class.
     * @class
     */
    var Window = (function () {
        function Window() {
        }
        /**
         * Register a logger as error handler.
         *
         * @param {Logger} logger  - The logger.
         */
        Window.registerErrorHandler = function (logger) {
            Window._loggers.push(logger);
        };
        /**
         * Unregister a logger as error handler.
         *
         * @param {Logger} logger - The logger.
         * @return {boolean} True if the logger was unregistred successfully, false otherwise.
         */
        Window.unregistrerErrorHandler = function (logger) {
            var unregistred = true;
            // Get the index of the registred logger from the list of loggers
            var index = Window._loggers.indexOf(logger, 0);
            // Check whether a logger was found in the list of registred loggers
            if (index != undefined) {
                Window._loggers.splice(index, 1);
                unregistred = false;
            }
            return unregistred;
        };
        /**
         * On error callback method.
         *
         * @param {any} errorMsg  - The error message.
         * @param {string} url  - The url.
         * @param {number} lineNumber  - The line number.
         * @param {number} colNumber  - The col number.
         * @param {any} error  - The stack trace error.
         */
        Window.onError = function (errorMsg, url, lineNumber, colNumber, error) {
            if (error === void 0) { error = null; }
            // The window loggers
            var loggers = Window._loggers;
            // Iterate through the configured log writers
            for (var index in loggers) {
                // Get the loggers
                var logger = loggers[index];
                // Log the event
                logger.log(Log.Logger_LogLevel.FATAL, { errorMsg: errorMsg, lineNumber: lineNumber, colNumber: colNumber, error: error });
            }
            return false;
        };
        Object.defineProperty(Window, "loggers", {
            /**
             * Gets the registred loggers {Logger[]}.
             *
             * @return {Logger[]} The registred loggers.
             */
            get: function () {
                return Window._loggers;
            },
            enumerable: true,
            configurable: true
        });
        return Window;
    })();
    Log.Window = Window;
    (function () {
        // Check whether the variable window is available
        if (typeof window == "undefined") {
            return;
        }
        // Register a Window error event callback method
        window.onerror = Window.onError;
    })();
})(Log || (Log = {}));
var Log;
(function (Log) {
    var Exception = (function (_super) {
        __extends(Exception, _super);
        function Exception(message) {
            _super.call(this, message);
            this.name = Exception.CLASS_NAME;
            this.message = message;
            this.stack = (new Error()).stack;
        }
        Exception.prototype.toString = function () {
            return this.name + ": '" + this.message + "' " + this.stack;
        };
        Exception.CLASS_NAME = "Exception";
        return Exception;
    })(Error);
    Log.Exception = Exception;
})(Log || (Log = {}));
var Log;
(function (Log) {
    /**
     * The Logger class.
     * @class
     */
    var Logger = (function (_super) {
        __extends(Logger, _super);
        function Logger(logOptions) {
            _super.call(this);
            this.logOptions = logOptions;
        }
        /** @inheritdoc */
        Logger.prototype.info = function (message, exception) {
            this.log(Log.Logger_LogLevel.INFO, message, exception);
        };
        /** @inheritdoc */
        Logger.prototype.warn = function (message, exception) {
            this.log(Log.Logger_LogLevel.WARN, message, exception);
        };
        /** @inheritdoc */
        Logger.prototype.debug = function (message, exception) {
            this.log(Log.Logger_LogLevel.DEBUG, message, exception);
        };
        /** @inheritdoc */
        Logger.prototype.error = function (message, exception) {
            this.log(Log.Logger_LogLevel.ERROR, message, exception);
        };
        /** @inheritdoc */
        Logger.prototype.fatal = function (message, exception) {
            this.log(Log.Logger_LogLevel.FATAL, message, exception);
        };
        /** @inheritdoc */
        Logger.prototype.log = function (logLevel, message, exception) {
            // Check if the log event is loggable
            if (!this.isLoggable(logLevel, message, exception)) {
                return;
            }
            // Check if the message is of type Object
            if (Log.Utility_Type.isObject(message)) {
                // Log the message object
                this.logObject(logLevel, message, exception);
            }
            else if (Log.Utility_Type.isString(message)) {
                // Log the message
                this.logMessage(logLevel, message, exception);
            }
        };
        /** @inheritdoc */
        Logger.prototype.setOptions = function (logOptions) {
            this.logOptions = logOptions;
        };
        /** @inheritdoc */
        Logger.prototype.addLogWriter = function (logWriter) {
            this.logOptions.logWriters.push(logWriter);
        };
        /** @inheritdoc */
        Logger.prototype.addLogFilter = function (logFilter) {
            this.logOptions.logFilters.push(logFilter);
        };
        /** @inheritdoc */
        Logger.prototype.addLogAppender = function (logAppender) {
            this.logOptions.logAppenders.push(logAppender);
        };
        /**
         * Logs a message of type string.
         *
         * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
         * @param {string} message  - The message to be logged.
         * @param {Exception} [exception] - The exception to be logged.
         */
        Logger.prototype.logMessage = function (logLevel, message, exception) {
            this.dispatchToWriters(logLevel, message, exception);
        };
        /**
         * Logs a message of type Object.
         *
         * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
         * @param {Object} object  - The object to be logged.
         * @param {Exception} [exception] - The exception to be logged.
         */
        Logger.prototype.logObject = function (logLevel, object, exception) {
            this.dispatchToWriters(logLevel, object.toString(), exception);
        };
        /**
         * Dispatches the log event to the configured log writers
         *
         * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
         * @param {string} message  - The message to be logged.
         * @param {Exception} [exception] - The exception to be logged.
         */
        Logger.prototype.dispatchToWriters = function (logLevel, message, exception) {
            // Get the configured log writers
            var logWriters = this.logOptions.logWriters;
            // Dispatch event to listeners
            this.dispatchEventToListeners(Log.Logger_Observer_Event_Log.BEFORE_LOG, logLevel, message, exception);
            // Iterate through the configured log writers
            for (var logWriterKey in logWriters) {
                // Get the log writer
                var logWriter = logWriters[logWriterKey];
                // Dispatch the log event
                logWriter.write(logLevel, message, exception);
            }
            // Dispatch event to listeners
            this.dispatchEventToListeners(Log.Logger_Observer_Event_Log.AFTER_LOG, logLevel, message, exception);
        };
        /**
         * Dispatches the log event to the event listeners.
         *
         * @param {Logger_Observer_Event_Log} logEvent  - The log event.
         * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
         * @param {string} message  - The message to be logged.
         * @param {Exception} [exception] - The exception to be logged.
         */
        Logger.prototype.dispatchEventToListeners = function (logEvent, logLevel, message, exception) {
            _super.prototype.dispatchEvent.call(this, logEvent, logLevel, message, exception);
        };
        /**
         * Check if the log event is loggable
         *
         * @param {Logger_LogLevel} logLevel  - The loglevel of the log messsage.
         * @return {boolean} If a log event is loggable
         */
        Logger.prototype.isLoggable = function (logLevel, message, exception) {
            // Check if the given log level is loggable
            if (logLevel > this.logOptions.logLevel) {
                return false;
            }
            // Get the configured log filters
            var logFilters = this.logOptions.logFilters;
            // Iterate through the configured log filters
            for (var logFilterKey in logFilters) {
                // Get the log filter
                var logFilter = logFilter[logFilterKey];
                // Check if the message is loggable
                if (!logFilter.isValid(logLevel, message, exception)) {
                    // Dispatch event to listeners
                    this.dispatchEventToListeners(Log.Logger_Observer_Event_Log.FILTER_FILTERED, logLevel, message, exception);
                    return false;
                }
            }
            // Dispatch event to listeners
            this.dispatchEventToListeners(Log.Logger_Observer_Event_Log.FILTER_ACCEPTED, logLevel, message, exception);
            return true;
        };
        return Logger;
    })(Log.Logger_Observer_Handler);
    Log.Logger = Logger;
})(Log || (Log = {}));
/// <reference path="Logger/LogLevel.ts" />
/// <reference path="Logger/Options/Parameters/Interface.ts" />
/// <reference path="Logger/Options/Interface.ts" />
/// <reference path="Logger/Options/Options.ts" />
/// <reference path="Logger/Interface.ts" />
/// <reference path="Logger/Type.ts" />
/// <reference path="Logger/Factory/Factory.ts" />
/// <reference path="Logger/Writer/Interface.ts" />
/// <reference path="Logger/Writer/Writer.ts" />
/// <reference path="Logger/Writer/Console/Writer.ts" />
/// <reference path="Logger/Filter/Interface.ts" />
/// <reference path="Logger/Filter/NullFilter.ts" />
/// <reference path="Logger/Observer/Event/Event.ts" />
/// <reference path="Logger/Observer/Event/Log.ts" />
/// <reference path="Logger/Observer/Handler/Interface.ts" />
/// <reference path="Logger/Observer/Handler/Handler.ts" />
/// <reference path="Logger/Appender/Interface.ts" />
/// <reference path="Logger/Appender/Appender.ts" />
/// <reference path="Object/Object.ts" />
/// <reference path="Utility/Type.ts" />
/// <reference path="Utility/Type.ts" />
/// <reference path="Window/Window.ts" />
/// <reference path="Exception.ts" />
/// <reference path="Logger.ts" />
