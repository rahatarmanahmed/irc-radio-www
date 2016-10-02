import deepstream from 'deepstream.io-client-js'

export const client = deepstream(process.env.REACT_APP_DEEPSTREAM_URL).login({
    username: process.env.REACT_APP_DEEPSTREAM_USER,
    password: process.env.REACT_APP_DEEPSTREAM_PASS
})

export const serverState = client.record.getRecord('song-state')

export const addSong = (url) => client.event.emit('queue', {
    action: 'add',
    url
})

export const skipSong = () => client.event.emit('queue', {
    action: 'next'
})
