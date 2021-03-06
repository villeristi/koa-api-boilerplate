import {fetchUsers} from './listUsers';

/**
 * The handler for listing users
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async (ctx) => {
  try {
    const {params: {id}} = ctx;
    const user = await fetchUsers(id);

    // For serialization, @see https://github.com/SeyZ/jsonapi-serializer
    ctx.body = ctx.serializer('user', {
      attributes: ['firstName', 'lastName'],
    }).serialize(user);
  } catch (e) {
    ctx.throw(404, e);
  }
};
