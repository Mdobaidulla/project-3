import './App.css';
import React, {Component} from 'react'
import Board from './Board'
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      defaultBoard:[]
    }
  }
  /**
   * This method will take the value from the API Get call as an array
   * Then set this value to the state defaultBoard array, so that we will be 
   * able to modify the box, and set into the box by passing into child. 
   * @param {this is the value we will get from API get call} boardValue 
   */
  setDefaultBoard = (boardValue) => {
    this.setState(
      {
        defaultBoard: boardValue,
      }
    )
    console.log("Confirmed state",this.state.defaultBoard);
  }
  render(){
    return(
      <div className="App">
          <h1>Sudoku</h1>
          <Board setDefaultBoard={this.setDefaultBoard} />
          
      </div>
    )
  }
}

export default App;
