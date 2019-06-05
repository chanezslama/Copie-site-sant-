import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer} from 'mdbreact';
import {  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView } from "mdbreact";
import Footer from './footer'
import {Link} from 'react-router-dom';
import minceur from './minceur.jpeg';

class Minceur extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapseID: '',

         }
    }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }




    toggleCollapse = collapseID => () => {
      this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}
    render() { 
        return ( 
    <div>

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
    
    <div className="bgded" style={{ backgroundImage : 'url(' + minceur + ')'}} >  

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
     
    <MDBContainer>
      <MDBNavbar color="white" style={{ marginTop: '20px' }} light>
          <MDBNavbarBrand>
            <strong>Bienvenue sur la rubrique minceur</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem >
                <Link to='/calcul_IMC'>CALCUL DE VOTRE INDICE DE MASSE CORPORELLE (IMC) </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="#!">CALCUL DE VOTRE INDICE DE MASSE GRASSE (IMG)</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="#!">CALCUL DU VOTRE POIDS IDEAL</Link>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>       
      </MDBNavbar>
    </MDBContainer> 
    </div>
    </div>
    </div>

        


          <div className="hoc container clear"> 
              <div className="sectiontitle">
                <p className="nospace font-xs">Comment maigrir de façon durable sans effet yoyo ?</p>
                <p className="heading underline font-x2">Astuces Minceur à suivre !</p>
              </div>          
              <section className="group">
                <div className="one_half first"><img className="inspace-15 borderedbox" src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/3/1313575/minceur-une-semaine-menus-pour-affiner-sans-affamer.jpg?v1/cover=1024x683" alt /></div>
                <div className="one_half">
                  <ul className="nospace group inspace-15">
                    <li className="one_half first btmspace-50">
                      <article>
                        <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Perdre des cuisses : 5 solutions qui marchent</a></h6>
                        <p className="nospace">Nous sommes nombreuses à vouloir découvrir une façon simple, une technique fiable et rapide pour perdre des cuisses. Cela éviterait de complexer, de culpabiliser quand, en mangeant une glace...</p>
                      </article>
                    </li>
                    <li className="one_half btmspace-50">
                      <article>
                        <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Pour avoir un ventre plat : adoptez les bons réflexes</a></h6>
                        <p className="nospace">Vous rêvez d'avoir un ventre plat, mais vous n’y arrivez pas ? Il faut l’avouer : il n’est pas toujours facile de perdre des centimètres autour de la taille....</p>
                      </article>
                    </li>
                    <li className="one_half first">
                      <article>
                        <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Bien choisir ses aliments allégés</a></h6>
                        <p className="nospace">Moins de sucre, moins de gras... bref, moins de tout ce qui pourrait alourdir la facture pondérale, a priori on est pour. Mais encore faut-il être sûr que l'alimentation nous apporte toujours les nutriments...</p>
                      </article>
                    </li>
                    <li className="one_half">
                      <article>
                        <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Les bons conseils minceur à connaître !</a></h6>
                        <p className="nospace">Mincir, perdre un peu de ventre, se libérer une fois pour toutes de la cellulite... ce sont toujours les mêmes préoccupations qui reviennent souvent à l’approche de l’été et de l’épreuve ultime du maillot de bain...</p>
                      </article>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="sectiontitle" >
              <p className="nospace font-xs">Comment maigrir de façon durable sans effet yoyo ?</p>
              <p className="heading underline font-x2">Nutrition Minceur</p>
            </div>
          
            <div style={{marginLeft:'100px' , marginRight:'100px'}}>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://img1.topsante.com/var/topsante/storage/images/1/0/0/3/1003700/10-idees-recues-sur-les-calories-des-fetes.jpg?v1/cover=1024x768"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="utensils" className="pr-2" />
                      Nutrition
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    27/02/2019
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  10 idées reçues sur les calories des fêtes
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                Les calories qui nous font si peur ne sont pas toujours là où on le croit. Pour ne plus se faire avoir, un point sur les 10 pièges les plus fréquents de la nutrition festive. Pour savoir enfin quoi manger et quoi éviter pour ne pas prendre trop de poids.
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/6/1316631/mincir-avant-les-fetes-craquez-pour-les-endives.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      26/02/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Mincir avant les fêtes : craquez pour les endives !
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/0/6/2/1062685/les-meilleurs-aliments-brule-graisse.jpg?v1/cover=1024x682"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      25/02/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                         Les meilleurs aliments brûle-graisse...
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315923/shiratakis-les-pates-zero-calorie.jpg?v1/cover=540x405"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      24/03/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Shiratakis : les pâtes zéro calorie ...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4" 
              style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://sf1.viepratique.fr/wp-content/uploads/sites/2/2017/06/salade-5-ingredients-618x410.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      23/02/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Le régime 5.2 à la française : 6 recettes à 250 calories ...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/4/1314899/les-femmes-plus-contraintes-par-epreuve-maillot-que-les-hommes.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      09/04/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Les femmes plus contraintes par l'épreuve du maillot que les hommes...
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
          </div>
          <br/>
          <br/>
          <br/>
          <div className="sectiontitle" >
              <p className="nospace font-xs">Comment maigrir de façon durable sans effet yoyo ?</p>
              <p className="heading underline font-x2">Régimes Minceur</p>
            </div>
          
            <div style={{marginLeft:'100px' , marginRight:'100px'}}>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="http://file1.topsante.com/var/topsante/storage/images/1/3/1/7/1317746/comment-mincir-apres-ans-science-reponse_exact540x405_l.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="utensils" className="pr-2" />
                      Nutrition
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    03/01/2019
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                Comment mincir après 65 ans ? La science a la réponse
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                Perdre du poids après 65 ans, c'est possible. Pour mincir sans mettre en péril sa santé, des chercheurs américains conseillent un régime alimentaire pauvre en calories mais riche en protéines.
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317665/7-jours-menu-pour-booster-son-metabolisme.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      26/02/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        7 jours de menu pour booster son métabolisme...
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317666/relancer-son-metabolisme-pour-bruler-des-graisses.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      12/12/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Relancer son métabolisme pour brûler des graisses...
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317186/la-diete-mediterraneenne-champion-2019-des-regimes.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      24/03/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        La diète méditerranéenne, championne 2019 des régimes...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4" 
              style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/6/1316562/micronutrition-une-journee-top-pour-votre-intestin.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      23/01/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Micronutrition : une journée au top pour votre intestin...
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/0/4/7/1047243/comment-perdre-kilos.jpg?v1/cover=1024x683"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      09/04/2019
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Comment perdre 3 kilos ? ...
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
          </div>
<Footer/>

</div> 
        );
    }
}
 
export default Minceur;