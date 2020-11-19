import React, { Component } from 'react';
import Square from './Square';

class Row extends Component {
    render() {
        return (
            <div className="box">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}

export default Row;