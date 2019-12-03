import React,{Component} from 'react'

class Home extends Component{
  constructor(props){
    super(props)
    console.log(props);
  }

  render(){
    return (
      <div>
        <h1>Home - {this.props.match.params.message}</h1>
      </div>
    )
  }
}

export default Home