import firebase from 'firebase/app'
import 'firebase/auth'

const SignIn = props => {
	const auth = props.auth

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider)
	}

	return <button onClick={signInWithGoogle}>Sign in with Google</button>
}

export default SignIn
