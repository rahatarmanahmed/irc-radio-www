import fetchPonyfill from 'fetch-ponyfill';

const fetch = fetchPonyfill()

export const queueSong = (url) => async (dispatch, getState) => {
    const { queue, input } = getState()

    // TODO: make some api request or somethin to update queue
    dispatch(updateQueue([...queue, input]))

    dispatch(updateInput(''))
}

export const updateInput = (input) => {
    return {
        type: 'updateInput',
        input
    }
}

export const updateQueue = (queue) => {
    return {
        type: 'updateQueue',
        queue
    }
}
