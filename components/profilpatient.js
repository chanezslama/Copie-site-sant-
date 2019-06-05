import React, { Component } from 'react';
import Navbar from './navbar';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import axios from 'axios';



class ProfilPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          collapseID: "",
        }
    }

    toggleCollapse = collapseID => () => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));
    }




    componentDidMount=()=>{
      this.setState({
          ...this.props.contacts.filter(el=>el._id===this.props._id)[0]
      }) 
  }

    render() { 
        return ( 
    <div>
        <Navbar/>
        <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h3>
                  {this.state.nom +' '+ this.state.prenom}
                </h3>
                <h4>
                {this.state.profession}
                </h4>
                  
              {/* <Link  to={`/profildoctor/${this.props.doctors[0]._id}`} className="ml-5 white-text" > Mon profil </Link>
              <Link  to={`/getquestionbycategorie/${this.props.doctors[0].specialite}/${this.props.doctors[0]._id}`} className="ml-5 purple-text " > Mes Question/Reponses </Link>
              <Link to="#"  className=" purple-text ml-5 "  > RDV </Link>
              <Link to="/"  className= "purple-text ml-5" > Se deconnecter </Link> */}




                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item d-flex">
                    <a className="nav-link active" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true" onClick={this.toggleCollapse("basicCollapse")}>Mon Profil</a>
                    <a className="nav-link " id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" >Mes Questions</a>
                    <a className="nav-link " id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" >Mes RDV</a>
                  </li>
                </ul>
              </div>
            </div>



            <div className="col-md-2">
            <Link to={`/edit_user_profil/${this.state._id}`}>
            <input type="button" className="profile-edit-btn" name="btnAddMore" Value="Editer"/>
            </Link>
            <br/>
            <Link to='/contact_patient'>
            <input type="button" className="profile-edit-btn" name="btnAddMore" Value="Déconnecter"/>
            </Link>
            </div>



          </div>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Nom</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.nom}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Prénom</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.prenom}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Date de naissance</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.date}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Adresse</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.adresse}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Numéro de téléphone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.telephone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>           
      </div>

    </div>
         );
    }
}
const mapStateToProps=(state)=>{
    return{
        contacts : state.reducerlist,
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
 
export default connect(mapStateToProps,mapDispatchToProps)(ProfilPatient);