import React from 'react'
import { connect } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { updateInput, queueSong, nextSong } from './actions'

const App = ({ queue, input, currentSong, onChangeInput, onSubmit, skipSong }) => (
    <div className="App container">
        <h1>IRC Radio @ #kellyirc</h1>
        <a href="http://rahat.bot.nu:8000/stream.ogg">▶️ Now Playing: <marquee>{currentSong}</marquee></a>
        <p><button type="button" onClick={skipSong}>skip this damn song</button></p>
        <div className="row">
            <div className="col-xs-12" style={{paddingBottom: '50px'}}>
                <form className="form" onSubmit={(e) => onSubmit(e, input)}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add to queue..." value={input} onChange={onChangeInput}/>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-default">Add</button>
                        </span>
                    </div>
                </form>
            </div>
            <div className="col-xs-12">
                <h2>Queued songs:</h2>
                <ul className="list-group">
                    {queue.map((song, i) => (
                        <li><a className="list-group-item" href={song} key={i}>{song}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

const mapStateToProps = ({ queue, currentSong, input }) => ({ queue, currentSong, input })
const mapDispatchToProps = dispatch => {
    return {
        onChangeInput: (e) => dispatch(updateInput(e.target.value)),
        onSubmit: (e, song) => {
            e.preventDefault()
            dispatch(queueSong(song))
        },
        skipSong: () => dispatch(nextSong())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
