const User = require("../../models/User");

module.exports = {
  Mutation: {
    register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO: Validate user data
      // TODO: Make sure user doesnt already exist
      // TODO: hash password and create an auth token
    },
  },
};
