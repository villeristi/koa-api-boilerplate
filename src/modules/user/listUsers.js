/**
 * Mocking API-request
 * @param timeout
 */
const fetchUsers = (timeout = 1000) => new Promise((resolve) => {
  return setTimeout(() => {
    return resolve([{
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      city: 'Uotila',
    }, {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      city: 'uotila',
    }]);
  }, timeout)
});

/**
 * The handler for listing users
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async (ctx) => {
  const {serializer} = ctx;
  const users = await fetchUsers();

  ctx.body = serializer('users', {
    attributes: ['firstName', 'lastName'],
  }).serialize(users);
};
