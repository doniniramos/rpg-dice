import * as express from "express"

import * as failure from '../util/failure'
import * as roomDomain from '../domain/room'

// Router 
export let routerRoom = express.Router()

// API Methods
routerRoom.post('/createRoom', async (request, response) => {
    try {
        response.send(await roomDomain.createRoom(request.body))
    } catch (error) {
        console.log(error);
        response.status(500).send(failure.errorToJson(error))
    }
})