"use strict";

// const { CustomAPIError } = require("../errors")
var _require = require("http-status-codes"),
  StatusCodes = _require.StatusCodes;
var errorHandlerMiddleware = function errorHandlerMiddleware(err, req, res, next) {
  var customError = {
    //set Default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later"
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  // Validation error handler
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors).map(function (item) {
      return item.message;
    }).join(",");
    customError.statusCode = 400;
  }

  // handles duplicate error, sends back more friendly response
  if (err.code && err.code === 11000) {
    customError.msg = "Duplicate value entered for ".concat(Object.keys(err.keyValue), " field, please choose another value");
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = "No item found with id : ".concat(err.value);
    customError.statusCode = 404;
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({
    msg: customError.msg
  });
};
module.exports = errorHandlerMiddleware;