import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebarReducer";


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
            newMessageBody: 'test',
        },

        sideBar: {
            friends: [
                { id: 1, avatar: 'imagen/Ivan.jpg', name: 'Ivan' },
                { id: 2, avatar: 'imagen/Vladislav.jpg', name: 'Vladislav' },
                { id: 3, avatar: 'imagen/Baurjan.jpg', name: 'Baurjan' },
            ],
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
        // Патерн Наблюдатель (observer)
        // Похож на патерн publisher observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    },
};

window.state = store;
export default store;