// class for error to make error handling easier

class ExpressError extends Error {
    constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
      console.error(this.stack);
    };
  }
  
module.exports = ExpressError;