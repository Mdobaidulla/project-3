import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
          squareValue: this.props.value,
          cssClass: '',
        }
      }
    render() {
        // if (this.props.isSolved === true)
        // {
        //     this.setState({
        //         cssClass: 'board-solved',
        //     })
        // }
        return (
            <div className="square">
                <input type="text" maxLength="1"
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                value={this.state.squareValue} 
                disabled={this.props.squareStatus}
                className={this.state.cssClass}
                />
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

      // Update the state of the value when the user enters a number
      onChange = e => {
        let input = e.target.value;
        let boxID = this.props.boxID;
        let squareID = this.props.squareID;
        let solution = parseInt(this.props.solutionBox[squareID]);

        // DEBUG - console.log(`The value ${input} was entered into square ${squareID} of box ${boxID}`);
        this.setState({
            squareValue: input,
        });
        this.props.updateBoard(input, boxID, squareID);

        // Update UI to turn square red if not correct number
        if (parseInt(input) !== solution && input !== '')
        {
            this.setState({
                cssClass: 'incorrect-input',
            })
        }
        else
        {
            this.setState({
                cssClass: 'correct-input',
            })
        }
    }
}   

export default Square;