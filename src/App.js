import React, { Component } from 'react';
import './App.css';

//import InputArea from './InputArea';
//import ImageCard from './ImageCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from "./actions/user-actions";

 

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      image:{
        url:"",
        title:""
      }
    }
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {

      this.props.onUpdateUser(event.target.value)
  }

  render() {
    
    return (
      <div className="App">
       <input onChange={this.onUpdateUser}/>
       {this.props.user}  
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {

  return {
    products:state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  } 
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props)
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
   
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps ) => {
  
  console.log(propsFromState, propsFromDispatch, ownProps)
  return {};
}

export default connect(mapStateToProps, mapActionsToProps) (App);
