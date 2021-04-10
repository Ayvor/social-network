const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi, how are you?', countLike: 5 },
                { id: 1, message: 'I am fine', countLike: 10 },
            ],
            newPostText: 'it-kamasutra.com',
        },

        dialogsPage: {
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
            newMessageText: 'test',
        },

        sideBar: {
            friends: [
                { id: 1, avatar: 'imagen/Ivan.jpg', name: 'Ivan' },
                { id: 2, avatar: 'imagen/Vladislav.jpg', name: 'Vladislav' },
                { id: 3, avatar: 'imagen/Baurjan.jpg', name: 'Baurjan' },
            ],
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
        // Патерн Наблюдатель (observer)
        // Похож на патерн publisher observer
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length,
            message: this._state.profilePage.newPostText,
            countLike: 0,
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: this._state.dialogsPage.messages.length,
            message: this._state.dialogsPage.newMessageText,
        }

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.messages.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this.addPost();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.updateNewPostText(action.newText);
        }
        else if (action.type === ADD_MESSAGE) {
            this.addMessage();
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this.updateNewMessageText(action.newText);
        }
    },

    // dispatch(action) {
    //     if (action.type === ADD_POST) {
    //         let newPost = {
    //             id: this._state.profilePage.posts.length,
    //             message: this._state.profilePage.newPostText,
    //             countLike: 0,
    //         }

    //         this._state.profilePage.posts.push(newPost);
    //         this._state.profilePage.newPostText = '';
    //         this._callSubscriber(this._state);
    //     }
    //     else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         this._state.profilePage.newPostText = action.newText;
    //         this._callSubscriber(this._state);
    //     }
    // },
};



export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

window.state = store;
export default store;