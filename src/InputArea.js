import React, { Component } from 'react'
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class InputArea extends Component {

  constructor(props) {
    super(props)
    this.state ={
        title: "",
        imageUrl:""
    }
  }

  handleInputData = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name]: e.target.value})
    console.log("state = ", this.state.imageUrl)
    
  }
  handleClick = (e) => {
    this.setState({[e.target.name]: e.target.value})
    
  }
    
  render() {
    return (
      <div className="container">
        <Input type="url" name="imageUrl" onPaste={this.handleInputData} onChange={this.handleInputData} id="imageUrl" placeholder="Enter URL" />
          <InputGroup>
        <Input  type="text" name="title" onPaste={this.handleInputData} onChange={this.handleInputData} id="imageTitle" placeholder="Title" />
        <InputGroupAddon addonType="append">
        <Button color="primary" onClick={this.handleClick} size="sm">New Post</Button>
        </InputGroupAddon>
      </InputGroup>
        
      </div>
    )
  }
}

export default InputArea
