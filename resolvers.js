class Friend {
  constructor(id, {
    firstName,
    lastName,
    gender,
    language,
    email,
    contacts
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.contacts = contacts;
  }
}

const friendDatabase = {}

// resolver, responds to query
// refactor to have a resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDatabase[id])
    },
  },
  Mutation: {
    createFriend: ({
      input
    }) => {
      let id = require('crypto').randomBytes(10).toString('hex');
      friendDatabase[id] = input;
      return new Friend(id, input)
    },
  },
};

