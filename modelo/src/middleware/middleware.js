exports.middlewareGlobal = (req, res, next) => {
    if (req.body.cliente) {
      console.log(`O que foi postado é: ${req.body.cliente}`);
    }
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};