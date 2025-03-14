class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode || 500;
    }
}
module.exports=ExpressError;