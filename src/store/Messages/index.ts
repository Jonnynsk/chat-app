import { createEvent, createStore } from 'effector'

import { MessagesProps } from '../../models/MessagesProps'

interface Store {
	messages: MessagesProps[]
	newMessage: string
}

const addNewMessageToList = (
	messages: MessagesProps[],
	message: string
): MessagesProps[] => [
	...messages,
	{
		id: Math.max(0, Math.max(...messages.map(({ id }) => id))) + 1,
		message,
	},
]

export const sendNewMessage = createEvent<string>()
export const addNewMessage = createEvent()

export default createStore<Store>({
	messages: [],
	newMessage: '',
})
	.on(sendNewMessage, (state, newMessage) => ({
		...state,
		newMessage,
	}))
	.on(addNewMessage, state => ({
		...state,
		newMessage: '',
		messages: addNewMessageToList(state.messages, state.newMessage),
	}))
