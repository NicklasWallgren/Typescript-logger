##Typescript-logger

Log framework written in Typescript

-------------
### **Examples**
#### **Simple console logger**
```
// Create the logger options
var options : Log.Logger_Options_Interface = new Log.Logger_Options();

// Create a basic console logger
var logger : Log.Logger = Log.Logger_Factory.build(Log.Logger_Type.CONSOLE, options);

// Log a simple message
logger.info("A simple message to be logged");
```

#### **Logging**

**Log a simple object**
```
logger.info({"key" : "value"});
```

**Log a simple string**
```
logger.info("A simple message to be logged");
```

**Log a object using a custom toString method**
```
var object = {"key" : "value"};

object.toString = function(): string {
	return `Key = ${this.key}`;
}
logger.info(object);
```

**Log a simple message with exception object**
```
logger.info("A simple message to be logged", new Log.Exception("Exception message"));
```

-------------

###  **Log levels**
```
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
FATAL
```
-------------
### **Logger Options**
```

```
-------------
### **Callback methods**
```

```
-------------
### **Logger Filters**
```

```
-------------
### **Window error callback**
```

```
-------------
