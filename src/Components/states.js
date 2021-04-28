import React, { Component } from 'react'



class Something extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
            role :"addition"
         }
    }

    addOne = () => {
        this.setState({ count: this.state.count + 1 })
      }
      minusOne = () => {
        this.setState({ count: this.state.count - 1 })
      }
    render() { 
        const count = this.state.count
        return ( 
            <div className="Container" style={{marginLeft:"100px"}}>
                 <h1>{count} </h1>
                    <button  onClick={this.addOne}>+1</button>
                    <button  onClick={this.minusOne}>-1</button>
            </div>
         );
    }
}
 
export default Something;