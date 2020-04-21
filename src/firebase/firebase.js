import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default } 





// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })



// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })


// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 300,
//     createdAt: 232323
// })



// database.ref('notes/-M4d1W4v3kEabWSN5Mfz').remove()

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'react native'
// })


// const firebaseNotes = {
//     notes: {
//         ids0: {
//             title: 'Firat note',
//             body: 'This is my note'
//         },
//         ids1: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }

// database.ref('notes').set(notes)


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(data)
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('Error fetching data', e)
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })



// database.ref().set({
//     name: 'Alex Kufel',
//     age: 36,
//     stressLevel: 2,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Minsk',
//         country: 'Belarus'
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((error) => {
//     console.log('Failed:', error)
// })

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Removed successfully')
//     }).catch((e) => {
//         console.log('Error', e)
//     })

// database.ref('isSingle').set(null)

// database.ref().update({
//     stressLevel: 0,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })