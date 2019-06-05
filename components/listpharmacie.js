import React, { Component } from 'react';
import { MDBIcon, MDBBtn } from "mdbreact";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput ,MDBCol ,MDBRow} from 'mdbreact';
import PharmacieItem from './pharmacieItem';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class ListPharmacie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            type:'',
            nom:'',
            adresse:'',
            codepostal:'',
            telephone:'',
            recherche:'',
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



    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      componentDidMount() {
        axios.get('/get_pharmacie')
        .then(res => this.props.savePharmacie( res.data))
        .catch(err => alert(err))
    }
    
    add=()=>{
        axios.post('/add_pharmacie',{...this.state})
        .then(()=>this.props.addpharmacie({...this.state}))
        .catch((err)=>alert(err))
      }

    render() { 
        const {pharmacielist}=this.props
        console.log(this.props.pharmacielist)
        return ( 
        <div>
            <div className='listpharmacie-container'>
            
            <div style={{marginTop :'20px'}}>
            <Link to='/espace_admin'>
            <MDBBtn outline color="secondary"  title='Retour'><MDBIcon icon="angle-double-left" size='lg'/> Retour</MDBBtn>
            </Link>
            </div>
            <div className='add-container'>
                
            <MDBBtn outline color="secondary" onClick={this.toggle} title='ajouter Pharmacie'><MDBIcon icon="plus" size="lg" /> Ajouter Pharmacie</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Ajouter les coordonnées Pharmacie </MDBModalHeader>
                <MDBModalBody>
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
                type="number"
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
              

            

            </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn outline onClick={this.toggle}>Fermer</MDBBtn>
                <MDBBtn outline color="secondary" onClick={this.add}>Sauvgarder</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
                
            </div>
            </div>

            <div className="pharmacielist-container">
            {
                pharmacielist.map((el,index) => <PharmacieItem key={index} item={el}/>)
            }

            </div>

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
        savePharmacie:pharmacielist=>{
            dispatch({
                type : 'SAVE_PHARMACIE',
                pharmacielist,
            })
        },
        addpharmacie:x=>{
            dispatch({
              type : 'ADD_PHARMACIE',
              newpharmacie:x
            })
          }

    }
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(ListPharmacie);
 