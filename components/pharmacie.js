import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import pharmacie from './pharmacie.jpg';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBMask, MDBView  } from "mdbreact";
import Footer from './footer';
import axios from 'axios';
import PharmacieItem from './pharmacieItem';





class Pharmacie extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          nompharmacie:'',
          listpharmacie:[],
          ville:'',
          typepharmacie : '',
        }
    }
    handlechandenompharmacie=(event)=>{
      this.setState({
        nompharmacie : event.target.value
      })
    }
    handlechangeville=(event)=>{
      this.setState({
        ville : event.target.value
      })
    }
    handlechangetype=(event)=>{
      this.setState({
        typepharmacie : event.target.value
      })
    }


    getpharmacie=()=>{
      axios.get(`/get_pharmacie`)
      .then(res => this.setState({listpharmacie : res.data.filter((el)=>el.adresse.toUpperCase() === this.state.ville.toUpperCase() || el.type.toUpperCase() === this.state.typepharmacie.toUpperCase() ||(el.adresse.toUpperCase() === this.state.ville.toUpperCase() && el.type.toUpperCase() === this.state.typepharmacie.toUpperCase()) )}))
      
      .catch(err => console.log('err'))
    }



    render() { 
      const {pharmacielist}=this.props
      console.log(this.props.pharmacielist)
        return ( 
  <div>
        <div className="wrapper row0">
          <div id="topbar" className="hoc clear">
            <div className="fl_left"> 
              <ul className="nospace">
                <li><i className="fas fa-phone rgtspace-5" /> +(216) 73 25 47 23</li>
                <li><i className="far fa-envelope rgtspace-5" /> info@ehygiene.com</li>
              </ul>
            </div>
            <div className="fl_right"> 
              <ul className="nospace">
                <li><a href="#" title="se connecter" style={{color:'#B946AD'}}><i className="fas fa-sign-in-alt" /></a></li>            
                <li><Link to='/espace_admin' title="Espace Admin" style={{color:'#B946AD'}}><i className="fas fa-user-edit" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
    
    <div className="bgded" style={{ backgroundImage : 'url(' + pharmacie + ')'}} >  

    <div className="wrapper row1">
            <header id="header" className="hoc clear">
              <div id="logo" className="fl_left"> 
                <h1>E-Hygiène</h1>
              </div>
              <nav id="mainav" className="fl_right"> 
                <ul className="clear">
                
                  <li className="active"><Link to='/'>Accueil</Link></li>
                  <li><a href="#">Médecin</a></li>
                  <li><Link to='/pharmacie'>Pharmacie</Link></li>
                  <li><a href="#">Médicaments</a></li>
                  <li><Link to='/minceur'>Minceur</Link></li>
                  <li><a href="#">Nos experts</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a className="drop" href="#">Test Quiz</a>
                    <ul>
                            
                     <li><a href="pages/full-width.html">Test Psychologique</a></li>               
                     <li><a href="pages/sidebar-right.html">Test Grossesse</a></li>                
                  
                    </ul>
                  </li>
                  <li><a className="drop" href="#">Santé</a>
                    <ul>
                     
                      <li> <Link to='/About_us'>Qui sommes nous?</Link></li>
                      <li><a href="pages/full-width.html">Vous êtes Médecin</a></li>
                      <li> <Link to='/contact_patient'>Vous êtes Patient</Link></li>
                      <li><a href="pages/sidebar-right.html">Maladies</a></li>
                      <li><Link to='/nutrition'>Nutrition</Link></li>
                      <li><a href="pages/font-icons.html">Recette santé</a></li>
                      <li><a href="pages/font-icons.html">Médecine naturelle</a></li>
                      <li><Link to='/maman_bebe'>Maman-Bébé</Link></li>
                      <li><Link to='/beaute'>Beauté</Link></li>
                      <li><a href="pages/font-icons.html">Psychologie</a></li>
                      <li><a href="pages/font-icons.html">Forum</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        <div className="overlay">
        <div className="image-header">
        <div className="inner-image-header">
          <div className="container">
            <div className="title-block">
              <h1 className="intro-title">Pharmacie du jour, de nuit et de garde, en Tunisie accessibles 24h/24 et 7jours/7</h1>
              <span className="title">Recherchez une pharmacie dans votre région</span>
            </div>
            <div className="search-block">
              <form id="search-location" className="form-search-home">
            <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
               Nom de Pharmacie
              </label>
              
              <input
                value={this.state.nompharmacie}
                name="fname"
                onChange={this.handlechandenompharmacie}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Nom de Pharmacie"
                required
              />

            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
               Gouvernorat
              </label>
              <select 
              className="browser-default custom-select"
              value={this.state.ville}
              onChange={this.handlechangeville}
              >
                  <option>Choisir gouvernorat </option>
                  <option value="TUNIS">TUNIS</option>
                  <option value="SOUSSE">SOUSSE</option>
                  <option value="MONASTIR">MONASTIR</option>
                  <option value="MAHDIA">MAHDIA</option>
                  <option value="SFAX">SFAX</option>
                  <option value="NABEUL">NABEUL</option>
                  <option value="BIZERTE">BIZERTE</option>
                  <option value="BEJA">BEJA</option>
                  <option value="JANDOUBA">JANDOUBA</option>
                  <option value="SILIENA">SILIENA</option>
                  <option value="GAFSA">GAFSA</option>
                  <option value="KASSERINE">KASSERINE</option>
                  <option value="MEDNINE">MEDNINE</option>
                  <option value="KAIROUAN">KAIROUAN</option>
                  <option value="SIDI BOUZID">SIDI BOUZID</option>
                  <option value="TOZEUR">TOZEUR</option>
                  <option value="TATAOUIN">TATAOUIN</option>
                  <option value="GABES">GABES</option>
              </select>


              </MDBCol>
              <MDBCol md="4" className="mb-3">
              <div >
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
               Type de Pharmacie
                </label>
                <select 
                className="browser-default custom-select"
                value={this.state.typepharmacie}
                onChange={this.handlechangetype}>
                  <option>Choisir le Type de Pharmacie</option>
                  <option value="PHARMACIE DU JOUR"> PHARMACIE DU JOUR</option>
                  <option value="PHARMACIE DE NUIT">PHARMACIE DE NUIT</option>
                  <option value="PHARMACIE DE GARDE">PHARMACIE DE GARDE</option>
                </select>
              </div>
              </MDBCol>
              <div >
              <MDBCol  className="mb-3">
                <button className="btn search-button" onClick={this.getpharmacie}><i className="fa fa-search" aria-hidden="true" /> Trouver maintenant</button>
              </MDBCol></div>
            </MDBRow>                
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
        
      </div>
      
      <div className="pharmacielist-container">
            {
                this.state.listpharmacie.map((el,index) => <PharmacieItem key={index} item={el}/>)
            }

            </div>


        <MDBCardBody style={{ paddingTop: 0 }}>
          <div className="hoc container clear"> 
            <div className="sectiontitle">
              <p className="nospace font-xs">Chercher votre pharmacie la plus proche en quelques clics  </p>
              <p className="heading underline font-x2">Actualités Pharmacie !</p>
            </div>
          </div>
          
          <MDBRow style={{marginLeft :'50px', marginRight : '50px'}}>
            <MDBCol md="12" lg="6">
              <div className="mb-4" >

                <h3 style={{color:'#B946AD'}}>
                  Mon Espace Pharmacien
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4" style={{textAlign :'justify' , lineHeight :'30px'}}>
                Vous êtes à la recherche d’une pharmacie en Tunisie, au plus près de chez vous ? Notre annuaire des pharmacies  de toute la Tunisie va vous permettre de la trouver en quelques clics. Notre puissant moteur de recherche, vous proposera immédiatement les coordonnées de la pharmacie à proximité de votre habitation, quel que soit le lieu où vous vous situez en Tunisie.
                De jour comme de nuit, la semaine et le dimanche ou durant les jours fériés, notre service en ligne de recherche d’une pharmacie , vous facilitera l’accès immédiat à la pharmacie qui vous convient. Il vous suffit de renseigner les champs « Nom de Pharmacie » et « ville », de cliquer sur « trouvez maintenant » et vous obtiendrez directement la liste des pharmacies de votre secteur.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="http://kapitalis.com/tunisie/wp-content/uploads/2019/05/Compl%C3%A9ments-alimentaires.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      17/05/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          La Pharmacie Centrale ordonne le retrait immédiat de 15 compléments alimentaire ...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://file1.topsante.com/var/topsante/storage/images/1/3/1/5/1315480/retrait-valsartan-mise-place-numero-vert_exact1024x768_l.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      06/04/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Liste des 55 Médicaments retirés du marché ...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://www.gaiapresse.ca/wp-content/uploads/2017/04/birth-control-640x336.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      15/03/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Avis de sensibilisation à propos le risque d'utilisation de protéines commercialisées sur le marché parallèle ...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>


  <Footer/>    
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
      savePharmacie:pharmacielist =>{
          dispatch({
              type : 'SAVE_PHARMACIE',
              pharmacielist ,
          })
      }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Pharmacie);
// export default Pharmacie;