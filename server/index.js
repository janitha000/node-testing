import express from 'express'
import router from '../routes'

export const init = () => {
    const app = express();
    app.use('/', router)
    return app
}

export const start = (app) => {
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log('App is listening on port ' + PORT)
    })
}


