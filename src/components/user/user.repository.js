import db from '../../../db';

export default {
  async get(id) {
    const [user] = await db('customer_details').where({ id });
    if (!user) {
      return false;
    }
    return user;
  },
};
