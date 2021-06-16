import { expect } from '@jest/globals'
import user from '../services/user-service'

const users = [
    {
        name: "Jantiha",
        age: 30
    },
    {
        name: "Vindya",
        age: 29
    }
]

describe('user-service', () => {
    it('should return correct valuues for user ', () => {
        expect(user.users()).toEqual(users)
    })
})