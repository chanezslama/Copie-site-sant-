import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput} from 'mdbreact';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';


class EditProfil extends Component {
    constructor(props) {
        super(props);
        this.state={
            nom:'',
            prenom:'',
            adresse :'',
            telephone :'',
            email : '',
            password :'',
            date:'',
            profession:''
        }
        
    }
    handlechangenom=(event)=>{
        this.setState({
          nom : event.target.value
        })
      }
      handlechangeprénom=(event)=>{
        this.setState({
          prenom : event.target.value
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
      handlechangeemail=(event)=>{
        this.setState({
          email : event.target.value
        })
      }
      handlechangepassword=(event)=>{
        this.setState({
          password : event.target.value
        })
      }
      handleChangedate=(e)=>
      {
         this.setState({
            date:e.target.value
         })
      }
      handlechangeprofession=(e)=>
      {
         this.setState({
            profession:e.target.value
         })
      }
      componentDidMount() {
        
        this.setState({
            ...this.props.contacts.filter((el)=>(el._id===this.props._id))[0]
        })
    }
    
    edit=()=>{
        axios.put(`/modify_users/${this.state._id}`,{
            nom : this.state.nom,
            prenom : this.state.prenom,
            date : this.state.date,
            profession : this.state.profession,
            adresse : this.state.adresse,
            telephone: this.state.telephone,
            email : this.state.email,
            password : this.state.password
        })
        .then(() => this.Profil({...this.state}))
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
                    Modifier Mon Profil</h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
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
                value={this.state.prenom}
                label=" Prénom"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangeprénom}
            />
                        <MDBInput 
            value={this.state.date}
            label='Date de naissance'
            type="date"
            group 
            validate
            containerClass="mb-0"
            onChange={this.handleChangedate}
            />
                       
                       
            <div>
                <select className="browser-default custom-select"
                name="profession"
                value={this.state.profession}
                onChange={this.handlechangeprofession}
                >
                  <option>Choisir Profession</option>
                  <option value="Agriculteur " >Agriculteur </option>
                  <option value="Commerçant et assimilé" >Commerçant et assimilé </option>
                  <option value="Profession libérale" >Profession libérale </option>
                  <option value="Cadre de la fonction publique " >Cadre de la fonction publique </option>
                  <option value="Professeur, profession scientifique " >Professeur, profession scientifique </option>
                  <option value="Cadre administratif ou commercial d'entreprise">Cadre administratif ou commercial d'entreprise </option>
                  <option value="Etudiant " >Etudiant </option>
                  <option value="Ingénieur ou cadre technique d'entreprise">Ingénieur ou cadre technique d'entreprise </option>
                  <option value="Policier ou militaire">Policier ou militaire </option>
                  <option value="Employé de commerce">Employé de commerce</option>
                  <option value="Technicien">Technicien </option>
                </select>
            </div>

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
                value={this.state.telephone}
                label=" Numéro de téléphone "
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangetelephone}
            />
            <MDBInput 
                value={this.state.email}
                label="Email" 
                group 
                type="text" 
                validate 
                onChange={this.handlechangeemail}
            />
            <MDBInput 
                value={this.state.password}
                label="Mot de passe" 
                group 
                type="text" 
                validate 
                onChange={this.handlechangepassword}
            />
            <div className="text-center mb-4 mt-5">
                <Link to={`/profil_patient/${this.state._id}`}>
                <MDBBtn
                  color="secondary"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.edit}
                >
                  Sauvgarder les modifications
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
      contacts : state.reducerlist
    }
  }
const mapDispatchToProps=(dispatch)=>{
    return{
        editcontact:x=>{
            dispatch({
                type :'EDIT_CONTACT',
                editcontact :x,
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(EditProfil);