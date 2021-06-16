import { afterEach, beforeEach, expect, it } from '@jest/globals'
import Sinon from 'sinon'
import user from '../services/user-service'
import data from '../data'

const users = [
    {
        name: "Janitha",
        age: 30
    },
    {
        name: "Vindya",
        age: 29
    }
]

const sandBox = Sinon.createSandbox()
let userStub;

describe('user-service', () => {
    beforeEach(() => {
        userStub = sandBox.stub(data, 'users').returns(users)
    })

    afterEach(() => {
        sandBox.restore()
    })


    it('should return correct valuues for user ', () => {
        expect(user.getUsers()).toEqual(users)
        expect(userStub.callCount).toEqual(1)
    })
    it('should return correct value for user by name', () => {
        expect(user.userByName('Janitha')).toEqual({ "name": "Janitha", "age": 30 })
        expect(userStub.callCount).toEqual(1)
    })
    it('should return null  value for user by name', () => {
        expect(user.userByName('Janitha123')).toEqual(null)
        expect(userStub.callCount).toEqual(1)
    })
})