import { addSong, skipSong } from './deepstream'

export const queueSong = (url) => async (dispatch, getState) => {
    addSong(url)
    dispatch(updateInput(''))
}

export const updateInput = (input) => {
    return {
        type: 'updateInput',
        input
    }
}

export const serverUpdate = (state) => {
    return {
        type: 'serverUpdate',
        state
    }
}

export const nextSong = () => async () => skipSong()
