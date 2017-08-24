import {Serializer} from 'jsonapi-serializer';
import {debug} from './util';

/**
 * Expose debug to ctx
 */
export const debugMiddleware = () => (ctx, next) => {
  ctx.debug = debug;

  return next();
};

/**
 * Expose Serializer
 */
export const serializerMiddleware = () => (ctx, next) => {
  ctx.serializer = (type, opts) => {
    return new Serializer(type, opts);
  };

  return next();
};
