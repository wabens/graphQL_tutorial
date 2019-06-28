import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `

  type Friend {
    id: ID
    firstName: String
    lastName: String
    language: String
    gender: Gender
    email: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String,
    lastName: String
  }
  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
      getFriend(id: ID): Friend
    }
  
  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    language: String
    gender: Gender
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
      firstName: String,
      lastName: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({typeaDef, resolvers})

export default schema;