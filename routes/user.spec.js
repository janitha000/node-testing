import { afterEach, expect } from '@jest/globals';
import Sinon from 'sinon'
import request from 'supertest'
import { init } from '../server'
import user from '../services/user-service'
import userData from '../data/user'

const sandBox = Sinon.createSandbox();

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

describe('user route integrating testing', () => {
    afterEach(() => {
        sandBox.restore()
    })

    it('should return all users', async () => {
        let getUserStub = sandBox.stub(user, 'getUsers').returns(users)
        const { body } = await request(init()).get('/users');
        expect(body).toEqual(users)
        expect(getUserStub.callCount).toEqual(1)
        expect(getUserStub.args).toEqual([[]])
    })

    it('should return user by name', async () => {
        let getUserStub = sandBox.stub(user, 'userByName').returns(users[0])
        const { body } = await request(init()).get('/users/Janitha');
        expect(body).toEqual(users[0])
        expect(getUserStub.callCount).toEqual(1)
        expect(getUserStub.arguments).toEqual([["Janitha"]])
    })
})