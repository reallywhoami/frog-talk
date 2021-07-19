import React from 'react'
import './ChatMessage.css'

const ChatMessage = props => {
	const { text, uid, photoURL } = props.message
	const auth = props.auth
	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL} alt={`icon of user`} />
			<p>{text}</p>
		</div>
	)
}

export default ChatMessage
