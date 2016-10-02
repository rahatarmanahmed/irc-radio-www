const initialState = {
    queue: [],
    currentSong: null,
    input: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'serverUpdate':
            return { ...state, ...action.state }
        case 'updateInput':
            return { ...state, input: action.input || '' }
        default: return state
    }
}
