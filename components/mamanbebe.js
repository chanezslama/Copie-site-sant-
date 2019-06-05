import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";


class Mamanbebe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div>
    <Navbar/>
        <div >
                <div className="hoc container clear"> 
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Comment je peux réussir ma grossesse ? </p>
                        <p className="heading underline font-x2">La grossesse mois par mois : une longue aventure qui connait bien des rebondissements !</p>
                    </div>
                </div>
            <div className="month-container">
            <ul className="nospace group team">
              <li className="one_quarter first">
                <figure><a className="imgover" href="#"><img src="https://m.mcdn.fr/files/resize/images/article/5/5/7/1092755/vignette-focus-wide-500x333.jpg" alt /></a>
                  <figcaption>1 mois de grossesse : Quand la grande aventure commence!!</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://img-3.journaldesfemmes.fr/4yPaYCVNJjXEDd-MktLi6qE3nOI=/910x607/smart/bf4eb8ab8f6c4325b92ed5159c55c72f/ccmcms-jdf/10838979.jpg" alt /></a>
                  <figcaption>2ème mois de grossesse : Développement rapide de l'embryon</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://media.idkids.fr/media/content/images/thumbs/0001095_900.jpeg" alt /></a>
                  <figcaption>3 mois de grossesse : Plus détendue et plus sereine !</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://img.static-rmg.be/a/view/q75/w696/h/http://media.oudersvannu.nl/m/nohu70n2xnv8.jpg" alt /></a>
                  <figcaption>4 mois de grossesse : les premières rondeurs</figcaption>
                </figure>
              </li>
            </ul>
            <ul className="nospace group team">
              <li className="one_quarter first">
                <figure><a className="imgover" href="#"><img src="https://img-3.journaldesfemmes.fr/wkWuVSzADs9wO1LdZUGhshr6oks=/910x607/smart/b6ed921b1d37409cb2379a284b2c9964/ccmcms-jdf/10841481.jpg" alt /></a>
                  <figcaption>5 mois de grossesse : tout bouge dans votre ventre !</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://media.carteland.com/guide/naissance/foetus-6-mois-279.jpg" alt /></a>
                  <figcaption>6 mois de grossesse : des changements en cascade</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://www.guide-piscine.fr/medias/image/femme-enceinte-sauna-10976-664-0.jpg" alt /></a>
                  <figcaption>7ème mois de grossesse : bébé se prépare pour le jour de l'accouchement</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://resize.prod.docfr.doc-media.fr/img/var/doctissimo/storage/images/media/images/fr/www/37eme-semaine-de-grossesse/7492358-1-fre-FR/37eme-semaine-de-grossesse.jpg" alt /></a>
                  <figcaption>8 ème mois de grossesse : La mise en beauté de bébé !</figcaption>
                </figure>
              </li>
            </ul>
            </div>    
        </div>
        {/*  */}
    <div className="wrapper row2">
    <div className="nutrition-container">
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
      <br/>
      Alimentation et grossesse : tout ce qu'il faut savoir
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
      Pendant ces neuf mois, bien vous nourrir, c'est bon pour vous et votre bébé. Pendant qu'il se développe et prend des forces, vous vous préparez à un accouchement en pleine forme et à une récupération rapide. Que manger, boire… Tous nos conseils pour une alimentation équilibrée.
      </p>
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://resize.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/nutrition/diaporamas/les-aliments-les-plus-riches-en-calcium/2118614-4-fre-FR/Les-aliments-les-plus-riches-en-calcium.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">LES APPORTS EN CALCIUM</h4>
            <p className="grey-text">
            Les besoins en calcium augmentent d'environ 1 200 mg par jour. Le calcium est indispensable à la construction du squelette de bébé, surtout au cours du troisième trimestre.Les produits laitiers (sauf ceux au lait cru) sont très riches en calcium. Il est conseillé de consommer trois laitages par jour : lait, yaourt, fromage blanc, fromage…
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://storenotrefamilleprod.blob.core.windows.net/images/cms/article/57841/57841_large.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">LES APPORTS EN GLUCIDES</h4>
            <p className="grey-text">
            Le métabolisme (assimilation par l’organisme) des glucides est profondément modifié pendant la grossesse, et le glucose est très important pour les tissus fœtaux. Il faut privilégier les sucres lents et bien répartir les glucides au cours des repas, surtout au petit déjeuner. Un petit déjeuner glucidique doit apporter 40 à 50 g d'amidon soit 80 g... </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://resize.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/nutrition/diaporamas/les-aliments-riches-en-proteines/2117225-4-fre-FR/Les-aliments-riches-en-proteines.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">LES APPORTS EN PROTÉINES</h4>
            <p className="grey-text">
            Les apports conseillés en protéines sont de 70 g par jour chez la femme enceinte. Les apports alimentaires les dépassent largement, sauf chez des femmes appartenant à des groupes dits "à risque" : milieux défavorisés, régimes particuliers (végétalisme)...
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>

      <h2 className="h1-responsive font-weight-bold my-5">
      <br/>
      Activité physique conseillée durant la grossesse
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
      Ce n’est pas parce qu’on est enceinte qu’il faut tout arrêter : au contraire! Il s’agit même du moment rêvé de s’adonner à de nouvelles activités, et de prendre du temps pour soi.
      </p>
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://www.jiwok.com/admin/crop/assets/img/shutterstock_114618274.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Piscine</h4>
            <p className="grey-text">
            Plusieurs femmes s’adonnent à l’aquaforme ou à l’aqua yoga, durant la grossesse. Conçus spécialement pour elles, ces exercices doux sont pratiqués en eau peu profonde, sans danger pour bébé, et permettent à la femme de se sentir mieux et de garder la forme...</p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="http://www.yoga-enfant.fr/wp-content/uploads/2018/04/differentes-postures-yoga-prenatal.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Yoga</h4>
            <p className="grey-text">
            Détente, méditation et mouvement : le yoga prénatal est une activité vraiment complète, qui permet à la future maman de bouger, mais aussi de communier avec sa condition et l’enfant qui grandit en elle. Avec des mouvements spécifiques, elle sera amenée à renforcer les muscles de son périnée...</p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://www.nautilusplus.com/content/uploads/2013/07/Photo-exercice-femme-enceinte-04512.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Gym et musculation</h4>
            <p className="grey-text">
            Mordue du gym? Sauf contre-indication de votre médecin, rien ne vous force à abandonner cette bonne habitude. Évidemment, vous devez y aller un peu plus doucement. Mais vous pouvez continuer à faire de l’éleptique ou du vélo stationnaire ou du footing...</p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
    </div><br/>
    </div>
    
    <div className="wrapper bgded overlay">
        <section id="testimonials" className="hoc container clear"> 
            {/* ################################################################################################ */}
            <div className="sectiontitle">
              <p className="nospace font-xs">Comment réussir ma grossesse ?</p>
              <p className="heading underline font-x2">Maternité : Tout Ce Qu'il Faut Savoir</p>
            </div>
            <article className="btmspace-80">
              <blockquote>Devenir parents bouleverse la vie, soulève de grandes questions et réveille des choses du passé.
Ma Méthode Unique de Coaching de Grossesse est centrée sur « l’Être« : l’Être du Bébé, de la Maman et du Papa.
Cet accompagnement permet au Couple de devenir des Parents ouverts, afin d’offrir la possibilité à leur Enfant d’être lui-même et de  développer son Plein Potentiel.</blockquote>
              <figure className="clear"><img src="" className="img-fluid z-depth-1 rounded-circle" alt />
                <figcaption>
                  <h6 className="heading">Tlili Maha</h6>
                  <em>Coach Professionnelle en Maternité</em></figcaption>
              </figure>
            </article>
            <footer className="center"><a className="btn" href="#">Connaitre plus à propos ma méthode...</a></footer>
            {/* ################################################################################################ */}
        </section>
    </div>
<Footer/>
</div>
         );
    }
}
 
export default Mamanbebe;