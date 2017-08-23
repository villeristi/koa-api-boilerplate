import _morgan from 'morgan';

/**
 * Wrap Morgan-logger to accept Koa
 *
 * @param format
 * @param options
 * @returns {function(*=, *=)}
 */
export default function (format, options) {
  const morgan = _morgan(format, options);
  return (ctx, next) => {
    const {req, res} = ctx;
    return new Promise((resolve, reject) => morgan(req, res, (err) => err ? reject(err) : resolve(ctx)))
      .then(next)
  }
}
