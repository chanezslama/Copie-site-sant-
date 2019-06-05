import React, { Component } from 'react';
import { Button, Card, Image,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import  Mapgoogle from './googleMap';

class PharmacieItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isMarkerShown: false 

        }
    }
  
    componentDidMount() {
      this.delayedShowMarker()
    }
  
    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 3000)
    }
  
    handleMarkerClick = () => {
      this.setState({ isMarkerShown: false })
      this.delayedShowMarker()
    } 
     
    delete=()=>{
      const {item}=this.props
      axios.delete(`/delete_pharmacie/${item._id}`).then(()=>this.props.delelecontact(item._id)).catch((err)=>alert('err'))

  }

  
    render() { 
        const {item}=this.props
        return ( 
        <div className='item-container'>
            
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/39/48/7585.Capture.PNG' />
        <Card.Header>{item.type}</Card.Header>
        
        <Card.Description>Nom de Pharmacie : {item.nom.toUpperCase()}</Card.Description>
        <Card.Description>Adresse :{item.adresse.toUpperCase()},{item.codepostal}</Card.Description>
        <Card.Description>Numéro de télephone: +(216) {item.telephone}</Card.Description>
        <Card.Description>Latitude : {item.lat}</Card.Description>
        <Card.Description>Longitude: {item.lng}</Card.Description>

        <div style={{width: "100%", height: "30"}}> 
              <Mapgoogle
                  isMarkerShown={this.isMarkerShown}
                  onMarkerClick={this.handleMarkerClick}
                  currentlatitude={item.lat}
                  currentlongitude={item.lng}
              />
              </div>      
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to={`/editpharmacie/${item._id}`}>
          <Button basic color='green' >
          <Icon name='edit'/>
          Modifier
          </Button>
          </Link>
          <Button basic color='red' onClick={this.delete}>
          <Icon name='remove medkit'/>
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

 
export default connect(null,mapDispatchToProps)(PharmacieItem);