export const initialState = {
    todos: [
        {
            id: 1,
            todo: "Make breakfast",
            complete: false
        },
        {
            id: 2,
            todo: "Make lunch",
            complete: false
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_TODO':
            const newToDo = {
                id: Date.now(),
                todo: action.payload,
                complete: false
            }
            return { todos: [...state.todos, newToDo]}
        default:
            return state
    }
}