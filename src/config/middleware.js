import {debug} from './util';

/**
 * Expose debug to ctx
 */
export const debugMiddleware = () => (ctx, next) => {
  ctx.debug = debug;

  return next();
};
