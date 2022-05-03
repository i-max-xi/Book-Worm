export const addBook = (item) => {
    return {
        type: 'ADD',
        item
    }
}

export const removeBook = (index) => {
    return {
        type: 'REMOVE',
        index
    }
}

const bookReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.item];

        case 'REMOVE':
            let a = state.slice(0, action.index);
            let b = state.slice(action.index + 1);
            return a.concat(b);

        default:
            return state;
    }
}

export default bookReducer;