const asyncHandler = (fn) => {
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => fn(error));
  };
};
export { asyncHandler };
