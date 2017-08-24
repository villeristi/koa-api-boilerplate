/**
 * Dummy users
 * @type {[null,null]}
 */
export const users = [{
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  city: 'Uotila',
}, {
  id: 2,
  firstName: 'Jane',
  lastName: 'Doe',
  city: 'uotila',
}];

/**
 * Mocking API-request
 * @param id
 * @param timeout
 */
export const fetchUsers = (id = null, timeout = 1000) => new Promise((resolve, reject) => {
  return setTimeout(() => {
    const data = id ? users.find((user) => String(user.id) === id) : users;

    if (!data) {
      return reject('User not found');
    }

    return resolve(data);
  }, timeout)
});

/**
 * The handler for listing users
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async (ctx) => {
  try {
    const users = await fetchUsers();

    // For serialization, @see https://github.com/SeyZ/jsonapi-serializer
    ctx.body = ctx.serializer('users', {
      attributes: ['firstName', 'lastName'],
    }).serialize(users);
  } catch (e) {
    ctx.throw(404, e);
  }
};
