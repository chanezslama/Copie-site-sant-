import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { connect } from 'react-redux';
import Coaching from './coaching.jpg'
import { MDBTable, MDBTableBody, MDBTableHead,MDBMask } from 'mdbreact';
import { MDBFreeBird, MDBIcon, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn,MDBInput, MDBEdgeHeader } from "mdbreact";
import axios from 'axios';

class ResultatTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }

    paie=()=>{
      var type = document.getElementsByName("paie");
      if(type[0].checked)
      {
          var val = type[0].value;
          alert(val);
      }
      
      else if(type[1].checked)
      {
          var val = type[1].value;
          alert(val);
      }
      
      else if(type[2].checked)
      {
          var val = type[2].value;
          alert(val);
      }
    }


    componentDidMount=()=>{
      this.setState({
        ...this.props.IMClist.filter(el=>el._id===this.props._id)[0]
      });
      this.setState({
        ...this.props.REPONSElist.filter(el=>el._id===this.props._id)[0]
      })
  }
      
          
    render() {


const {IMClist}=this.props
const lg = IMClist.length-1
const {REPONSElist}=this.props
const lgr = REPONSElist.length-1


        return (
          
<div>
  
    <Navbar/>

        <MDBEdgeHeader style={{backgroundImage: 'url(' + Coaching + ')'}}  >
        <MDBMask className="text-black d-flex flex-column align-items-center rgba-white-strong "> 
        <section className="my-5">
        <h2 className="responsive font-weight-bolt text-center my-5" style={{padding:'30px'}}>
        Pour atteindre votre objectif de <strong style={{color :'red'}}> {this.props.IMClist[lg].desiredweight} kg </strong>, vous êtes au début du voyage vers la réussite pour retrouver une meilleure image de vous-même .
        </h2>
        </section>
        </MDBMask>
        </MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow>
            <MDBCol  className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Je m'appelle <span style={{color :'red'}}>{this.props.IMClist[lg].nom}</span> qui fait <span style={{color :'red'}}> {this.props.IMClist[lg].size} m </span> et pèse <span style={{color :'red'}}> {this.props.IMClist[lg].weight} kg </span>.</MDBCardTitle>
                
                <p style={{fontSize :'20px'}}>
                En résumant votre situation ,"<span style={{color :'red'}}> {this.props.REPONSElist[lgr].question3} </span>" vous empèche de perdre vos kilos qui sont stocker dans <span style={{color :'red'}}>{this.props.REPONSElist[lgr].question1}</span>.
                </p>               
                <p style={{fontSize :'20px'}}>
                Donc à travers E-Hygiène, on vous propose des solutions efficaces afin de<span style={{color :'red'}}> {this.props.REPONSElist[lgr].question6} </span> en recommandant les méthodes de nos exports selon votre choix .
                </p>
                <p style={{fontSize :'20px'}}>
                D'après ma situation, je souhaite bien être accompagné par <span style={{color :'red'}}> {this.props.REPONSElist[lgr].question9} </span> jusqu'à  l'atteinte des mes objectifs .
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      
        <div className="sectiontitle">
          <p className="heading underline font-x2">Un coaching sur mesure pour être sûr d’atteindre votre objectif</p>
        </div>
        <div className="">
        <p style={{fontSize : '17px' , marginLeft :'70px' , marginRight : '70px'}} >
        
        Un expert vous reçoit individuellement, vous conseille et vous motive pendant toute la durée de votre régime.

        A chaque consultation, elle prend votre poids et mesure le tour de taille, les hanches, les cuisses, etc. pour suivre votre progression.
        Pour optimiser les résultats du régime, on fait un <strong>Laser Verjú </strong>, un appareil  « Body contouring » à 360 degrés élimine les excédents de graisse sur le corps.
       
        <ul> 
          <br/>
          <li>Coaching minceur classique : 2 consultations dans le mois.</li>
          <li>Coaching minceur intense : 3 consultations la première semaine puis 2 consultations heddomadaires.</li> 
        </ul> 
        </p>
      <br/>
      <div style={{  marginLeft :'100px' , marginRight : '100px'}}>
      <MDBTable hover>
      <MDBTableHead >
        <tr >
          <th>Régime nutritionnel</th>
          <th>Tarifs</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1ère consultation</td>
          <td>150 DT</td>
        </tr>
        <tr>
          <td>Coaching minceur classique</td>
          <td>340 DT / mois</td>
        </tr>
        <tr>
          <td>Coaching minceur intense 1 mois</td>
          <td>1000 DT</td>
        </tr>
        <tr>
          <td>Coaching minceur intense 3 mois</td>
          <td>2000 DT</td>
        </tr>
        <tr>
          <td>Coaching minceur intense 6 mois</td>
          <td>3200 DT</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
    <br/>
    <div className="sectiontitle">
      <p className="heading underline font-x2">Je choisis mon moyen de paiement</p>
    </div>
    <MDBFreeBird>
          <MDBRow>
            <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>
                <div className="d-flex">
                <input type="radio" name="paie" value="Vous allez effectuer le Paiement par carte bancaire" onClick={this.paie}/> 
                <p style={{paddingTop :'12px', paddingLeft : '10px'}}> Paiement par carte bancaire </p>
                <img 
                style={{ height :'40px'}}
                src="https://www.toutverre.com/uploads/images/5846c33fdf2405846c22733074_carte-bleue.jpg"/>
                </div>

                <div className="d-flex">
                <input type="radio" name="paie" value="Vous allez effectuer le Paiement par un Chèque bancaire" onClick={this.paie}/> 
                <p style={{ paddingLeft : '10px'}}> Chèque bancaire </p>
                </div>
                <br/>

                <div className="d-flex">
                <input type="radio" name="paie" value="Vous allez effectuer le Paiement par téléphone avec nos conseillers" onClick={this.paie}/> 
                <p style={{ paddingLeft : '10px'}}>Paiement par téléphone avec nos conseillers </p>
                </div>
   
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
    </div>
    <div className="sectiontitle">
      <p className="heading underline font-x2">Contactez-nous</p>
    </div>


    <div style={{marginLeft :'100px'}}>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Votre Prénom" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Votre E-mail"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="light" >
            <MDBIcon icon="paper-plane" />
            Envoi
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="grey-text" />
              <p>Sousse, Tunisie</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="grey-text mt-4" />
              <p> +(216) 73 25 47 23</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="grey-text mt-4" />
              <p>info@ehygiene.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>

      </div>
<Footer/>
    
           

</div>
          );
    }
}
const mapStateToProps=(state)=>{
  return{
    IMClist : state.reducerIMC,
    REPONSElist : state.reducerreponse,
  }
}


 
export default connect(mapStateToProps)(ResultatTest);