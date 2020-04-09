import * as admin from 'firebase-admin';

export async function createRoom(data: any) {
    
    const roomRef = admin.firestore().collection('room').doc()
    const roomId = roomRef.id

    const roomObject = {
        id: roomRef.id,
        createdAt: new Date(Date.now()).toJSON(),
    }

    await admin.firestore().doc('room/' + roomId).set(roomObject, { merge: true })
    return roomObject
}

//  TODO: Update room

//  TODO: Create round with room id

export async function rollDice(data: any) {
    
    //  TODO: Attribute this rolling to a player, in a round, in a room
    
    const max = Math.floor(data.dice)
    const min = 1

    const diceResult = (Math.floor(Math.random() * (max - min)) + min)

    return {statusCode: 200, message: 'You rolled '+diceResult+'!'}
}