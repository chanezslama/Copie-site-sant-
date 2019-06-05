import React, { Component } from 'react';
import { Button, Card, Image,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios'



class IMCItem extends Component {

  delete=()=>{
    const {item}=this.props
    axios.delete(`/delete_IMC/${item._id}`).then(()=>this.props.deleleIMC(item._id)).catch((err)=>alert('err'))

}

    render() { 

        const {item}=this.props
        return ( 
<div className='item-container'>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://fr.opensuse.org/images/0/0b/Icon-user.png' />
        <Card.Header>{item.nom}</Card.Header>      
        <Card.Description>Votre taille : {item.size} m</Card.Description>
        <Card.Description>Votre poids actuel : {item.weight} kg</Card.Description>
        <Card.Description> Poids souhaité : {item.desiredweight} kg</Card.Description>

      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        
          <Button basic color='green' >
          <Icon name='edit'/>
          Modifier
          </Button>
           
          <Button basic color='red' onClick={this.delete}>
          <Icon name='remove user'/>
            Effacer
          </Button>
        </div>
      </Card.Content>
    </Card>
</div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    deleleIMC:_id=>{
      dispatch({
        type : 'DELETE_IMC',
        _id,
      })
    }
  }
}
 
export default connect(null,mapDispatchToProps)(IMCItem);