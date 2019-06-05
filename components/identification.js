import React, { Component } from 'react';
import Navbar from './navbar';
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBContainer} from 'mdbreact';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Bienvenue=()=>{
  return (
    <div>
  <Navbar/>
  <MDBContainer className="mt-5 text-center">
  <MDBRow>
    <MDBCol>
    <div className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="heading underline font-x2" style={{color :'black'}}>Merci pour votre confiance, Vous pouver commencer votre Défi ...</p>
        </div>            
        <MDBBtn outline color="secondary">Commencer !</MDBBtn>
    </div>
           
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div> 
) 
  }
  
class Identification extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            existe:false,
            email:'',
            password:'',
         }
    }
    handlechangeemail=(event)=>{
        this.setState({
            email:event.target.value
    }) }

    handlechangepassword=(event)=>{
        this.setState({
            password:event.target.value
    }) }
    
       
    identify_user=()=>{
        axios.get('/get_user').then((res)=>{
          if( res.data.filter(el=>el.email===this.state.email && el.password===this.state.password).length == 0 )
          {alert('Merci de vérifer vos informations') }  
         else
            {this.setState({existe:true})

          this.props.saveContact(res.data.filter(el=>el.email===this.state.email && el.password===this.state.password )); 
          
      }
 
       }).catch((err)=>alert(err)) }
   

    render() { 
        return (

          this.state.existe ? <Link to={`/calcul_IMC/${this.props.contacts[0]._id}`}><Bienvenue/></Link>:

    <div>
    <Navbar/>
    <div className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="heading underline font-x2">Merci de vous identifier !</p>
        </div>
    <div style={{paddingLeft : '300px'}}>   
    
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>

            <MDBCardBody className="mx-4 mt-4">
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
                label=" Mot de passe"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={this.handlechangepassword}
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
    
    </div> 
    </div>
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
        saveContact:contacts=>{
            dispatch({
                type : 'SAVE_CONTACT',
                contacts,
            })
        }

        }
    }
 
export default connect(mapStateToProps,mapDispatchToProps)(Identification);