import React, { Component } from 'react'

export class Useref extends Component {
    
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },1000)


    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>Useref
        <h2>{this.state.timer}</h2>
        <button onClick={()=>clearInterval(this.interval)}>stop</button>
      </div>
    )
  }
}

export default Useref