import React, { Component } from 'react';
import Row from './Row';

class Board extends Component {
    render() {
        return (
            <div className="board">
                Board here
                <Row />
            </div>
        )
    }
}

export default Board;