let initialState = {
    friends: [
        { id: 1, avatar: 'imagen/Ivan.jpg', name: 'Ivan' },
        { id: 2, avatar: 'imagen/Vladislav.jpg', name: 'Vladislav' },
        { id: 3, avatar: 'imagen/Baurjan.jpg', name: 'Baurjan' },
    ],
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;