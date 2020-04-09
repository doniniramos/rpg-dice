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