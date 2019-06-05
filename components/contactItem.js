import React, { Component } from 'react';
import { Button, Card, Image,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ContactItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
     
    delete=()=>{
      const {item}=this.props
      axios.delete(`/delete_user/${item._id}`).then(()=>this.props.delelecontact(item._id)).catch((err)=>alert('err'))

  }

  
    render() { 
        const {item}=this.props
        return ( 
        <div className='item-container'>
            
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://fr.opensuse.org/images/0/0b/Icon-user.png' />
        <Card.Header>{item.nom +' '+item.prenom}</Card.Header>
        <Card.Description>Date de naissance : {item.date}</Card.Description>
        <Card.Description>Profession : {item.profession}</Card.Description>
        <Card.Description>Adresse : {item.adresse}</Card.Description>
        <Card.Description>Numéro de télephone : {item.telephone}</Card.Description>
        <Card.Description>Adresse Email : {item.email}</Card.Description>
        <Card.Description>Mot de passe : {item.password}</Card.Description>


        
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to={`/editContact/${item._id}`}>
          <Button basic color='green' >
          <Icon name='edit'/>
          Modifier
          </Button>
        </Link>   
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
    delelecontact:_id=>{
      dispatch({
        type : 'DELETE_CONTACT',
        _id,
      })
    }
  }
}

 
export default connect(null,mapDispatchToProps)(ContactItem);