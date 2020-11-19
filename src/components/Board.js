import React, { Component } from 'react';
import Box from './Box';

class Board extends Component {
    render() {
        return (
            <div className="board">
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
            </div>
        )
    }
}

export default Board;