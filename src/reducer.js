const initialState = {
    queue: [
        'https://www.youtube.com/watch?v=LlJ-u9ZDo_Q',
        'https://www.youtube.com/watch?v=LlJ-u9ZDo_Q',
        'https://www.youtube.com/watch?v=LlJ-u9ZDo_Q',
        'https://www.youtube.com/watch?v=LlJ-u9ZDo_Q'
    ],
    input: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'updateQueue':
            return { ...state, queue: action.queue }
        case 'updateInput':
            return { ...state, input: action.input || '' }
        default: return state
    }
}
