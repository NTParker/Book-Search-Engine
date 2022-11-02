const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id }).select(
          '-__v -pasword'
        );
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
