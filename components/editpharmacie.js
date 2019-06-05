import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput} from 'mdbreact';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Editpharmacie extends Component {
    constructor(props) {
        super(props);
        this.state={
            type:'',
            nom:'',
            adresse:'',
            codepostal:'',
            telephone:'',
            lat: '',
            lng: '',


        }
        
    }
    handlechangetype=(event)=>{
        this.setState({
          type : event.target.value
        })
      }
      handlechangenom=(event)=>{
        this.setState({
          nom: event.target.value
        })
      }
      handlechangeadresse=(event)=>{
        this.setState({
          adresse : event.target.value
        })
      }
      handlechangetelephone=(event)=>{
        this.setState({
          telephone : event.target.value
        })
      }
      handlechangelng=(event)=>{
        this.setState({
          lng : event.target.value
        })
      }
      handlechangelat=(event)=>{
        this.setState({
          lat : event.target.value
        })
      }
      handlechangecode=(event)=>{
        this.setState({
          codepostal : event.target.value
        })
      }


      componentDidMount() {
        
        this.setState({
            ...this.props.pharmacielist.filter((el)=>(el._id===this.props._id))[0]
        })
    }
    
    edit=()=>{
        axios.put(`/modify_pharmacie/${this.state._id}`,{
            type : this.state.type,
            nom : this.state.nom,
            adresse : this.state.adresse,
            codepostal : this.state.codepostal,
            telephone: this.state.telephone,
            lat : this.state.lat,
            lng : this.state.lng

        })
        .then(() => this.props.editpharmacie({...this.state}))
        .catch((err)=>alert('err'))
        
    }

    render() { 
        return ( 
        
    <div style={{ marginLeft :'450px'}}>
    <MDBContainer >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Modifier les coordonnées de la pharmacie</h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">

            <div>
                <select className="browser-default custom-select"
                name="type"
                value={this.state.type}
                onChange={this.handlechangetype}
                >
                  <option>Choisir type pharmacie </option>
                  <option value="PHARMACIE DU JOUR" >PHARMACIE DU JOUR</option>
                  <option value="PHARMACIE DE NUIT" >PHARMACIE DE NUIT</option>
                  <option value="PHARMACIE DE GARDE" >PHARMACIE DE GARDE</option>

                </select>
            </div>
            
            <MDBInput
                value={this.state.nom}
                label=" Nom"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangenom}
            />
            <MDBInput
                value={this.state.adresse}
                label=" Adresse"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangeadresse}
            />
            <MDBInput
                value={this.state.codepostal}
                label=" code Postal"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangecode}
            />
            <MDBInput
                value={this.state.téléphone}
                label=" Numéro de téléphone "
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangetelephone}
            />
            <MDBInput
              group
              type="number"
              step="any"
              validate
              containerClass="mb-0"
              label="Longitude "
              value={this.state.lng} 
              onChange={this.handlechangelng}
            />

            <MDBInput
              type="number"
              step="any"
              label="Latitude"
              value={this.state.lat} 
              onChange={this.handlechangelat}
              group
              validate
              containerClass="mb-0"
               />


            <div className="text-center mb-4 mt-5">
                <Link to='/espace_admin/pharmacie_list'>
                <MDBBtn
                  color="secondary"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.edit}
                >
                  Sauvgarder
                </MDBBtn>
                </Link>  
            </div>      
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
              
    
        </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        pharmacielist : state.reducerlistpharmacie
    }
  }
const mapDispatchToProps=(dispatch)=>{
    return{
        editpharmacie:x=>{
            dispatch({
                type :'EDIT_PHARMACIE',
                editpharmacie :x,
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Editpharmacie);