import React, { useState, useRef } from 'react'
import ChatMessage from './ChatMessage'
import './ChatRoom.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useCollectionData } from 'react-firebase-hooks/firestore'

const ChatRoom = props => {
	const scrollDown = useRef()

	const firestore = firebase.firestore()
	const messagesRef = firestore.collection('messages')
	const query = messagesRef.orderBy('createdAt').limit(25)
	const [messages] = useCollectionData(query, { idField: 'id' })
	const [formValue, setFormValue] = useState('')
	const auth = props.auth

	const sendMessage = async e => {
		e.preventDefault()

		const { uid, photoURL } = auth.currentUser

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		})

		setFormValue('')

		scrollDown.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<div className="chat">
				{messages &&
					messages.map(msg => (
						<ChatMessage key={msg.id} message={msg} auth={auth} />
					))}
				<div ref={scrollDown}></div>
			</div>

			<form onSubmit={sendMessage}>
				<input
					className="message-field"
					value={formValue}
					onChange={e => setFormValue(e.target.value)}
				/>
				<button type="submit">Send!</button>
			</form>
		</>
	)
}

export default ChatRoom
