import {getBoardNumber} from './apis/Api'
import React, {Component} from 'react'
class MainBoard extends Component{
  componentDidMount(){
      /**
       * Calling the API GET call and passing the value 
       * into App.js through setDefaultBoard method
       */
    getBoardNumber('board','easy')
    .then((response) =>{
        this.props.setDefaultBoard(response.data);
    })
    .catch((error) =>{
        console.log(`API ERROR:`, error);
    })
};  
  render(){
//    const defaultBoar=this.props.defaultBoard((square) =>{
//        return <Square />
//    })
    return(
      <div>
          <h4>Returning Board Value</h4>
      </div>
    )
  }
}

export default MainBoard;
