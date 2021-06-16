import data from '../data'

const getUsers = () => {
    return data.users();
}

const userByName = (name) => {
    const users = data.users()
    const result = users.filter(user => user.name === name)

    if (result.length === 0) return null
    return result[0]
}

const user = {}
user.getUsers = getUsers
user.userByName = userByName

export default user;