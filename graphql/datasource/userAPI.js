import { RESTDataSource } from 'apollo-datasource-rest'

class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3001/'
    }

    getUsers = async () => {
        return this.get('/users')
    }
}

export default UserAPI;