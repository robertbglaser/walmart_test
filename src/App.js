import React, { Component } from 'react';
import './App.css';
import InputArea from './InputArea';
import ImageCard from './ImageCard';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      image:{
        url:"",
        title:""
      }

    }
  }

  componentDidMount(){

  }


  render() {
    return (
      <div className="App">
      <InputArea/>
      <ImageCard 
      imageUrl={"https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg"}
      Title='hiking Boots'
       /> 
       <ImageCard 
      imageUrl={"https://thumbs.dreamstime.com/z/zip-line-26475548.jpg"}
      Title='Zip Line'
       /> 
      </div>
    );
  }
}

export default App;
