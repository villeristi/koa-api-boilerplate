import _debug from 'debug';

/**
 * Debug
 */
export const debug = _debug('koa-boilerplate');

/**
 *
 * @param key
 */
export const checkEnv = (key) => {
  if (!process.env[key]) {
    throw new Error(`Plz provide environment variable \`${key}\``);
  }
};

/**
 *
 * @param key
 * @returns {string}
 */
export const getEnv = (key) => {
  checkEnv(key);
  return String(process.env[key]);
};
