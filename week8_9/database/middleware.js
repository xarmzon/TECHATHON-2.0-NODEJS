exports.notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    msg: "Not Found",
  });
};

exports.errorMiddleware = (err, req, res, next) => {
  console.log(err.msg || err.message);
  res.status(err.status || 500).json({
    msg: err.msg || err.message || "An Unknown Error Occurred",
  });
};
