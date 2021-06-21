

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: (_, __, { dataSources }) => {
            return dataSources.userAPI.getUsers()
        },
        userByName: (_, { name }, { dataSources }) => {
            return dataSources.userAPI.getUserByName(name)
        }
    },
};

export default resolvers;