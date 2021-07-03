import { RESTDataSource } from 'apollo-datasource-rest'

class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3001/'
    }

    willSendRequest(request) {
        console.log('REST api is called')
        request.headers.set('Authorization', this.context.token);
    }

    getUsers = async () => {
        return this.get('/users')
    }

    getUserByName = async (name) => {
        return this.get(`/users/${name}`)
    }
}

export default UserAPI;
