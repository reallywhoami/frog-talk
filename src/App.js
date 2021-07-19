import React from 'react'
import ChatRoom from './ChatRoom'
import SignOut from './SignOut'
import SignIn from './SignIn'
import './App.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'frog-talks.firebaseapp.com',
	databaseURL:
		'https://frog-talks-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'frog-talks',
	storageBucket: 'frog-talks.appspot.com',
	messagingSenderId: '725962070530',
	appId: '1:725962070530:web:b749406b6cb253af07651b',
})

const auth = firebase.auth()

function App() {
	const [user] = useAuthState(auth)

	return (
		<div className="App">
			<header>
				<h2>Frog Talk</h2>
				<SignOut auth={auth} />
			</header>
			<section>
				{user ? <ChatRoom auth={auth} /> : <SignIn auth={auth} />}
			</section>
		</div>
	)
}

export default App
