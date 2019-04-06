import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            image:""
        }
    }
  render() {
    return (
      <div>
        <br/>
<Card>
       
        <CardBody>
          <CardTitle>{this.props.Title}</CardTitle>
          <CardImg top width="100%" src={this.props.imageUrl} alt="Card image cap" />
        </CardBody>
      </Card>

        
      </div>
    )
  }
}

export default ImageCard
