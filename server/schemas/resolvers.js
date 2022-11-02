const { User } = require('../models/User');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id }).select(
          '-__v -pasword'
        );
        return userData;
      }
    },
  },
};

module.exports = resolvers;
