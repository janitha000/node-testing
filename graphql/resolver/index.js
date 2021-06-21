

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: (_, __, { dataSources }) => {
            return dataSources.userAPI.getUsers()
        }
    },
};

export default resolvers;