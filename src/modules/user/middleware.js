/**
 * First middleware
 * @param ctx
 * @param next
 * @returns {*}
 */
export const firstMiddleware = (ctx, next) => {
  ctx.debug(`First middleware on ${ctx.route.path}`);
  return next();
};

/**
 * Second middleware
 * @param ctx
 * @param next
 * @returns {*}
 */
export const secondMiddleware = (ctx, next) => {
  ctx.debug(`Second middleware on ${ctx.route.path}`);
  return next();
};
