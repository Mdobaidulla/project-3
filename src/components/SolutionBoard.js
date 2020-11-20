import React, {Component} from 'react'
import {getSolution} from '../apis/Api';

class SolutionBoard extends Component{
    componentDidMount(){
                  getSolution('solve',this.props.board)
                  .then((response) =>{
                    this.props.setSolutionBoard(response.data.solution)
                  }).catch((error) =>{
                      console.log(error);
                  })
            }
   render(){
       return(
           <>
           <h1>Solution Board</h1>
           </>
            
       )
   }
}
export default SolutionBoard;
