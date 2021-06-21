import { init, start } from './server'
import { startApolloServer } from './graphql'


const startExpressServer = async () => {
    let app = init()
    await startApolloServer(app)
    start(app)
}


startExpressServer();