//reusable class for error handling

class CustomError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode =statusCode;
        Error.captureStackTrace(this,this.constructor) //for debugging
    }
}

module.exports = CustomError