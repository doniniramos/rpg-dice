// import * as admin from 'firebase-admin'
// import * as express from 'express'
// import * as cors from 'cors'

// const corsOptions: cors.CorsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin || '') !== -1 || (!origin)) {
//             callback(null, true)
//         } else {
//             console.log(origin)
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// export async function verifyUserAuthentication(request: express.Request, response: express.Response, next: express.NextFunction) {
//     try {
//         if (request.originalUrl.includes("createUser") || request.originalUrl.includes("allItems") || request.originalUrl.includes("allTrips") ||
//             request.originalUrl.includes("successPayment") || request.originalUrl.includes("failurePayment") || request.originalUrl.includes("cancelPayment") ||
//             request.originalUrl.includes("statusPayment")) {
//             console.log('Skipped for ' + request.originalUrl)
//             next()
//             return
//         }
//         await admin.auth().verifyIdToken(request.header("idToken") || '')
//         next()
//     } catch (error) {
//         console.error(error)
//         response.end("not allowed")
//     }
// }

// export function applyMiddlewares(router: express.Express) {
//     router.use(verifyUserAuthentication)
//     router.use(logRequests)
//     router.use(cors(corsOptions))
// }

// export function logRequests(request: express.Request, response: express.Response, next: express.NextFunction) {
//     console.log(request.path + " Method:" + request.method)
//     next()
// }