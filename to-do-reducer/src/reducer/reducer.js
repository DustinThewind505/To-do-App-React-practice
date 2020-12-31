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
    switch (action.type) {
        case 'ADD_NEW_TODO':
            const newToDo = {
                id: Date.now(),
                todo: action.payload,
                complete: false
            }
            return { todos: [...state.todos, newToDo] };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            complete: !todo.complete
                        }
                        
                    }
                    return todo
                })
            }
            case 'CLEAR_COMPLETE':
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.complete === false)
                }
        default:
            return state
    }
}