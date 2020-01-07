import React, { Component } from "react"
import Board from './components/Board'
import Join from './components/Join'

import "./App.css";

class App extends Component {
    
    render() {
        return (
            <center><div className="App">
                <Board />
                <Join />
            </div></center>
        );
    }
}

export default App;
