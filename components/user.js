import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBCollapse,MDBFormInline,} from 'mdbreact';
import { MDBJumbotron,  MDBIcon, MDBCardTitle, MDBCardText } from "mdbreact";
import axios from 'axios';

const Bienvenue=()=>{
  return (
    <div>
  <Navbar/>
  <MDBContainer className="mt-5 text-center">
  <MDBRow>
    <MDBCol>
    <div className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="heading underline font-x2" style={{color :'black'}}>Bienvenue dans votre profil</p>
        </div>
        {/* <Link to='/profil_patient'> */}
        <MDBBtn outline color="secondary">Continuer</MDBBtn>
        
        {/* </Link>              */}
    </div>
           
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div> 
 ) 
  }
  




class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID1: '',
            collapseID2: '',
            radio: '',
            nom:'',
            prenom:'',
            profession:'',
            adresse :'',
            telephone :'',
            email : '',
            password :'',
            date:'',
            existe:false,


         }
    }


    toggleCollapse1 = collapseID1 => () => {
        this.setState(prevState => ({
          collapseID1: prevState.collapseID1 !== collapseID1 ? collapseID1 : ""
        }));
      }
    toggleCollapse2 = collapseID2 => () => {
        this.setState(prevState => ({
          collapseID2: prevState.collapseID2 !== collapseID2 ? collapseID2 : ""
        }));
      }

      handleChangenom=(e)=>
      {
         this.setState({
             nom:e.target.value
         })
      }
      handleChangeprenom=(e)=>
      {
         this.setState({
             prenom:e.target.value
         })
      }
      handlechangeprofession=(e)=>
      {
         this.setState({
            profession:e.target.value
         })
      }
      handleChangeadresse=(e)=>
      {
         this.setState({
             adresse:e.target.value
         })
      }
      handleChangetelephone=(e)=>
      {
         this.setState({
             telephone:e.target.value
         })
      }
      handleChangeemail=(e)=>
      {
         this.setState({
             email:e.target.value
         })
      }
      handleChangepassword=(e)=>
      {
         this.setState({
             password:e.target.value
         })
      }
      handleChangedate=(e)=>
      {
         this.setState({
            date:e.target.value
         })
      }
      
    add=()=>{
      axios.post('/add_user',{...this.state})
      .then(()=>this.props.addcontact({...this.state}))
      .catch((err)=>alert(err))
    }

    identify_user=()=>{
      axios.get('/get_user').then((res)=>{
        if( res.data.filter(el=>el.email===this.state.email && el.password===this.state.password).length == 0 )
        {alert('Merci de vérifier vos informations') }  
       else
          {this.setState({existe:true})

        this.props.saveContact(res.data.filter(el=>el.email===this.state.email && el.password===this.state.password )); 
        
    }

     }).catch((err)=>alert(err)) }

    render() { 
        return ( 

  this.state.existe ? <Link to={`/profil_patient/${this.props.contacts[0]._id}`}><Bienvenue/></Link>:
  <div >

    <Navbar/>
    <div>
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Félicitations pour votre passage à l'action ! Vous avez décidé de changer et vous allez réussir.</strong>
            </MDBCardTitle>
            <MDBCardBody>
              <MDBCardText>
              A travers notre site, vous bénéficierez de :<br/>
              Tous les outils et conseils au service de votre bien-être !<br/>
              Le régime gratuit le plus élaboré d'internet : recettes, plans repas, listes de courses, compteur de calories...<br/>
              C'est 100 % gratuit, c'est notre état d'esprit ! Rejoignez-nous !
              </MDBCardText>
              <div className="user-container">
    <MDBBtn color="primary" size="lg"  outline color="secondary" onClick={this.toggleCollapse1("basicCollapse1")} style={{ marginBottom: "1rem" }}>
     Nouveau sur <b> E-hygiène </b> ? <br/> Merci de saisir vos informations
    </MDBBtn>
    <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
    <div className="card-container">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                Nouveau sur E-hygiène <br/>
                Merci de saisir vos informations
                </h3>
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
                onChange={this.handleChangenom}
            />
            <MDBInput
                value={this.state.prénom}
                label=" Prénom"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handleChangeprenom}
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
                onChange={this.handleChangeadresse}
            />
            <MDBInput
                value={this.state.telephone}
                label=" Numéro de téléphone "
                group
                type="number"
                validate
                containerClass="mb-0"
                onChange={this.handleChangetelephone}
            />
            <MDBInput 
                value={this.state.email}
                label="Email" 
                group 
                type="text" 
                validate 
                onChange={this.handleChangeemail}
            />
            <MDBInput 
                value={this.state.password}
                label="Mot de Passe" 
                group 
                type="text" 
                validate 
                onChange={this.handleChangepassword}
            />
              <div className="text-center mb-4 mt-5">
                <Link to='/espace_admin/user_list'>
                <MDBBtn
                  color="secondary"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.add}
                >
                  J'ai crée mon compte
                </MDBBtn>
                </Link>
              </div>
              <MDBFormInline>
                <MDBInput label="J'accepte les conditions générales d'utilisation." filled type="checkbox" id="checkbox1" />
              </MDBFormInline>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </MDBCollapse>

    


    <MDBBtn color="primary" size="lg"  outline color="secondary" onClick={this.toggleCollapse2("basicCollapse2")} style={{ marginBottom: "1rem" }}>
    Vous avez déjà utilisé <b> E-hygiène </b> ?<br/> Merci de vous identifier.
        </MDBBtn>
        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID2}>
        <div className="card-container">
        <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                Vous avez déjà utilisé E-hygiène ?<br/>
                    Merci de vous identifier.
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Email" group type="text" validate value={this.state.email} onChange={this.handleChangeemail} />
              <MDBInput
                value={this.state.password}
                label=" Mot de passe"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handleChangepassword}
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Vous avez oublié votre
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  mot de passe?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="secondary"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.identify_user}
                >
                  se connecter
                </MDBBtn>
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </MDBCollapse>
</div>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="#"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    
<Footer/> 
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
    addcontact:x=>{
      dispatch({
        type : 'ADD_CONTACT',
        newcontact:x
      })
    },
    saveContact:contacts=>{
      dispatch({
        type : 'SAVE_CONTACT',
        contacts,
      })
    }
  }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Users);