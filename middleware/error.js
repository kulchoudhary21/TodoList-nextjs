export const errorHandler = (
  resp,
  statusCode = 500,
  message = "Internal server Error"
) => {
  return resp.status(statusCode).json({
    success: false,
    message: message,
  });
};

// export const asyncError = (passedFun) => {
//   return Promise.resolve(passedFun(req, resp)).catch((err) => {
//     return errorHandler(resp, 500, err.message);
//   });
// };
