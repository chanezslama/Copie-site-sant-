import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";


class Nutrition extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
        <div>
        <Navbar/> 

        <div className="nutrition-container">
            
            <section className="group">
              <div className="one_half first"><img className="inspace-15 borderedbox" src="" alt /></div>
              <div className="one_half">
                <ul className="nospace group inspace-15">
                  <li className="one_half first btmspace-50">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Une nourriture de qualité, équilibrée et modérée</a></h6>
                      <p className="nospace">On oublie trop souvent que notre nourriture, constitue véritablement la matière première avec laquelle nous fabriquons notre corps...</p>
                    </article>
                  </li>
                  <li className="one_half btmspace-50">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>L'importance de 3 vrais repas par jour</a></h6>
                      <p className="nospace">L'idéal est de prendre ses repas à heures régulières et au calme. La journée doit s'articuler autour de 3 vrais repas par jour...</p>
                    </article>
                  </li>
                  <li className="one_half first">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Apprenez à ruser !</a></h6>
                      <p className="nospace">Pour ne pas vous trompez dans la composition du repas, choisissez d'abord un produit dont vous avez envie sur le moment, parmi les différents groupes d'aliments : par exemple, du poulet rôti...</p>
                    </article>
                  </li>
                  <li className="one_half">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>L'équilibre au fil du temps</a></h6>
                      <p className="nospace">Mais l'équilibre alimentaire ne se fait pas que sur un plat, ni même sur un repas ! Il s'effectue sur une journée entière, voir même sur la semaine...</p>
                    </article>
                  </li>
                </ul>
              </div>
            </section>
            </div>
            {/*  */}
    <div className="nutrition-container">
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Les 6 aliments clés d’une alimentation saine et équilibrée
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
      L’équilibre alimentaire repose sur quelques fondamentaux qui, comme leur nom l’indique, sont essentiels. Docteur BonneBouffe vous livre les 7 constituantes d’une alimentation saine et équilibrée, à incorporer le plus souvent possible dans votre quotidien.
      </p>
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="http://www.primheure.ch/new/images/stories/virtuemart/product/Fruits.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Les fruits :</h4>
            <p className="grey-text">
            Riches en vitamines, fibres et minéraux, les fruits sont d’excellents alliés santé. Les pêches et les abricots regorgent d’antioxydants, tandis que les bananes et les kiwis vous apporteront l’énergie nécessaire pour éviter les coups de fatigue en hiver.
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://previews.123rf.com/images/baibakova/baibakova1610/baibakova161000137/64161441-les-aliments-riches-en-fibres-sur-fond-de-bois-%C3%A0-plat.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Les aliments riches en fibres :</h4>
            <p className="grey-text">
            Indispensables à l’équilibre de l’organisme, les fibres alimentaires présentent de nombreux bienfaits. Elles contribuent à faire baisser le cholestérol LDL (qui doit rester bas). Les fibres régulent le transit intestinal ainsi que l’absorption des glucides et des lipides.

            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://file1.topsante.com/var/topsante/storage/images/media/images/galeries/les-poissons-gras-fournisseurs-d-omega-3/8721772-2-fre-FR/Les-poissons-gras-fournisseurs-d-omega-3_width1024.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Les poissons gras :</h4>
            <p className="grey-text">
            Une denrée délicieuse pleine de bienfaits. Les poissons gras (saumon, sardine, maquereau) sont des aliments économiques source de protéines, de vitamines et d’oméga 3 qui contribuent au bon fonctionnement du cœur.
            Profitez des beaux jours pour les consommer sous forme de barbecue, à l’apéro ou au grill.
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      <br/>
      <br/>
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://img1.topsante.com/var/topsante/storage/images/medecine/maladies-chroniques/diabete/les-legumineuses-pour-lutter-contre-le-diabete-616867/8804968-1-fre-FR/Les-legumineuses-pour-lutter-contre-le-diabete.jpg?v1/cover=1024x683"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Les légumineuses :</h4>
            <p className="grey-text">
            Riches en protéines végétales, fibres et vitamines (et pauvres en lipides), les « légumes secs » font partie intégrante d’une alimentation saine et contribuent à l’effet de satiété. Les légumineuses sont nombreuses et variées : haricots, lentilles, soja, pois entiers ou cassés, pois chiches, fèves, luzerne ou lupins, vous n’aurez que l’embarras du choix !
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://bingonuts.be/wp-content/uploads/2017/07/slide1.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Les fruits secs :</h4>
            <p className="grey-text">
            D’excellents alliés santé pour rester en bonne santé au quotidien. Il existe deux types de fruits secs : les fruits naturellement secs (amandes, noix) et les fruits déshydratés (abricots, dattes).
            Chaque fruit sec possède des bienfaits spécifiques : les dattes préviennent les coups de fatigue, tandis que les noix favorisent la réduction du cholestérol LDL.
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://www.advance-beauty.com/wp-content/uploads/2016/05/Viande-blanche.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">La viande blanche :</h4>
            <p className="grey-text">
            Moins grasse que les autres types de viande, la viande blanche (volaille, veau, porc, lapin) est peu calorique et riche en protéines. C’est également une viande économique et facile à cuisiner au fil des menus de la semaine. Selon certaines études, la viande blanche pourrait aussi diminuer le risque de maladies cardiovasculaires et certains cancers.
            </p>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> Lire plus ...
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
    <div className="wrapper row2">
          <div className="hoc container clear"> 
            {/* ################################################################################################ */}
            <div className="sectiontitle">
              <p className="nospace font-xs">Avoir une alimentation saine et équilibrée</p>
              <p className="heading underline font-x2">Bien vieillir : tout est dans la tête ?</p>
            </div>
            <ul className="nospace group team">
              <li className="one_quarter first">
                <figure><a className="imgover" href="#"><img src="https://static.passeportsante.net/i49542-bien-vieillir-tout-est-dans-la-tete.jpg" alt /></a>
                  <figcaption><strong>Pratiquer une activité physique pour être bien dans son corps</strong></figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://static.passeportsante.net/i41346-bien-vieillir-tout-est-dans-la-tete.jpg" alt /></a>
                  <figcaption><strong>Se sentir bien dans sa tête et avoir une bonne philosophie de vie </strong></figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://static.passeportsante.net/i47061-bien-vieillir-tout-est-dans-la-tete.jpg" alt /></a>
                  <figcaption><strong>Vieillir de manière positive en entretenant sa santé au quotidien</strong></figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://static.passeportsante.net/i43594-bien-vieillir-tout-est-dans-la-tete.jpg" alt /></a>
                  <figcaption><strong>Préserver conter les facteurs psychologiques déstabilisants</strong></figcaption>
                </figure>
              </li>
            </ul>
            {/* ################################################################################################ */}
          </div>
        </div>
        <Footer/>

</div> 
            
        );
    }
}
 
export default Nutrition;