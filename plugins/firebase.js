import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig.js'

let firebaseApp

if (!firebase.apps.length) {
	firebaseApp = firebase.initializeApp (firebaseConfig)
} else {
	firebaseApp = firebase.app()
}

export const db = firebaseApp.firestore()

