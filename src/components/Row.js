import React, { Component } from 'react';
import Square from './Square';

class Row extends Component {
    render() {
        return (
            <div className="row">
                Row here
                <Square />
            </div>
        )
    }
}

export default Row;