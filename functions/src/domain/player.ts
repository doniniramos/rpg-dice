import * as admin from 'firebase-admin';

export async function createPlayer(data: any) {
    
    const playerRef = admin.firestore().collection('player').doc()
    const playerId = playerRef.id

    //  TODO: Verificar se parametros vindos do data não são nulos antes de salvar

    const playerObject = {
        id: playerRef.id,
        name: data.name,
        createdAt: new Date(Date.now()).toJSON(),
    }

    await admin.firestore().doc('player/' + playerId).set(playerObject, { merge: true })
    return playerObject
}