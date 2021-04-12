const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
    avatars: [
        { id: 1, avatar: 'imagen/Ivan.jpg' },
        { id: 2, avatar: 'imagen/Vladislav.jpg' },
        { id: 3, avatar: 'imagen/Baurjan.jpg' },
    ],
    dialogs: [
        { id: 1, avatar: 'imagen/Ivan.jpg', name: 'Ivan' },
        { id: 2, avatar: 'imagen/Vladislav.jpg', name: 'Vladislav' },
        { id: 3, avatar: 'imagen/Baurjan.jpg', name: 'Baurjan' },
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
    ],
    newMessageBody: 'test',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newMessage = {
                id: state.messages.length,
                message: body,
            };
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;