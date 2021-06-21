import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type User {
        name: String
        age: Int
    }

    type Query {
    hello: String
    users: [User]  
    }
`;

export default typeDefs;