import * as express from 'express'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
// import * as middleware from './util/middleware'

import * as roomAPI from './api/roomAPI'

// Initialization
admin.initializeApp({
    credential: admin.credential.applicationDefault() 
})

export const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

const appRoom = express()
appRoom.disable('x-powered-by')
// middleware.applyMiddlewares(appRoom)
appRoom.use("/", roomAPI.routerRoom)

//  Export APIs     ---
exports.room = functions.https.onRequest(appRoom)

//  On Update Events    ---
export const eventRoomUpdated = functions.firestore.document('room/{roomId}')
    .onUpdate(async (change, context) => {

        console.log('Room has been edited '+change.before.id)
    })

//  On Delete Events    ---
export const eventRoomDeleted = functions.firestore.document('room/{roomId}')
    .onDelete(async (snapshot, context) => {
       
        console.log('Room has been deleted '+snapshot.id)
    })


