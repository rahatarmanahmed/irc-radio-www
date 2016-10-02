import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { updateInput, queueSong } from './actions'

const App = ({ queue, input, onChangeInput, onSubmit }) => (
    <div className="App container">
        <h1>IRC Radio @ #kellyirc</h1>
        <div className="row">
            <div className="col-xs-12" style={{paddingBottom: '50px'}}>
                <form className="form" onSubmit={(e) => onSubmit(e, input)}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add a song to the queue..." value={input} onChange={onChangeInput}/>
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
                        <a className="list-group-item" href={song} key={i}>{song}</a>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

const mapStateToProps = ({ queue, input }) => ({ queue, input })
const mapDispatchToProps = dispatch => {
    return {
        onChangeInput: (e) => dispatch(updateInput(e.target.value)),
        onSubmit: (e, song) => {
            e.preventDefault()
            dispatch(queueSong(song))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
