import * as express from "express"

import * as failure from '../util/failure'
import * as playerDomain from '../domain/player'

// Router 
export let routerPlayer = express.Router()

// API Methods
routerPlayer.post('/createPlayer', async (request, response) => {
    try {
        response.send(await playerDomain.createPlayer(request.body))
    } catch (error) {
        console.log(error);
        response.status(500).send(failure.errorToJson(error))
    }
})