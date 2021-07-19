const SignOut = props => {
	const auth = props.auth

	return (
		auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
	)
}

export default SignOut
