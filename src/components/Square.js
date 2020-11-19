import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div className="square">
                <input type="text" maxLength="1" onKeyPress={this.onKeyPress} onChange={this.onChange}/>
            </div>
        )
    }

    // Only allow numbers 1-9 to be entered into the box
    onKeyPress= e =>  {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);

        // If the character entered is not 1-9, don't allow it 
        if (!/^([1-9])$/.test(keyValue))
          e.preventDefault();
      }

      // Log input value
      onChange = e => {
        let input = e.target.value;
        console.log(input);
    }
}

export default Square;