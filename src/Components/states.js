import React, { Component } from 'react'

class Something extends Component {
    constructor(props) {
        super(props);
        // 
        this.state = { 
            count: 0,

         }
    }
     //la methode addition
     addOne = () => {
      this.setState({ count: this.state.count + 1 })
    }
    // la methode soustraction 
    minusOne = () => {
      this.setState({ count: this.state.count - 1 })
    }

    reset=()=>{
      this.setState({count:0})
    }

   
    render() { 
        const count = this.state.count
        return ( 
            <div className="Container" style={{marginLeft:"100px"}}>
                 <h1>{count} </h1>
                    <button  onClick={this.addOne}>+1</button>
                    <button  onClick={this.minusOne}>-1</button>
                    <button onClick={this.reset}>reset</button>
            </div>
         );
    }
}
 
export default Something;