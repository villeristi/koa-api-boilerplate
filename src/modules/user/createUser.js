import Joi from 'joi';

/**
 * Mocking API-request
 * @param data
 * @param timeout
 */
const createUser = (data, timeout = 1000) => new Promise((resolve) => {
  return setTimeout(() => {
    return resolve(Object.assign(data, {id: 1}));
  }, timeout)
});

/**
 * The handler for creating a user
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async (ctx) => {
  const {serializer, request} = ctx;

  /**
   * if the request is empty => throw 400
   */
  if (!request.fields) {
    ctx.throw(400);
  }

  /**
   * Valid schema for user request
   * @see https://github.com/hapijs/joi
   * @type {{firstName, lastName}}
   */
  const schema = {
    firstName: Joi.string().required().min(2),
    lastName: Joi.string().required(),
  };

  /**
   * Validate against schema & pick error
   * @see https://github.com/hapijs/joi
   */
  const {error} = Joi.validate(request.fields, schema, {allowUnknown: true});

  /**
   * If we have error => throw 422 with validation details
   */
  if (error) {
    ctx.throw(422, error);
  }

  /**
   * Everything's fine => mock API-request
   */
  const user = await createUser(request.fields);

  /**
   * And finally send serialized response
   */
  ctx.body = serializer('user', {
    attributes: ['firstName', 'lastName'],
  }).serialize(user);
};
