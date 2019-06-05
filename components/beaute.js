import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { MDBIcon, MDBBtn } from "mdbreact";


class Beaute extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
    <div>
        <Navbar/>
        <div>
            <div className="hoc container clear"> 
                <div className="sectiontitle">
                    <p className="nospace font-xs">Ma beauté ,ma perle de ma vie ! </p>
                    <p className="heading underline font-x2">Actualité Beauté </p>
                </div>
            </div>
        </div>
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="wrapper row3">
          <main className="hoc container clear"> 
            {/* main body */}
            {/* ################################################################################################ */}
            <section id="introblocks">
              <ul className="nospace group btmspace-80">
                <li className="one_third first">
                  <figure><a className="imgover" href="#"><img src="https://www.prime-beaute.com/wp-content/uploads/2017/10/comment-se-parfumer.jpg" alt /></a>
                    <figcaption>
                      <h6 className="heading">parfums</h6>
                      <div>
                        <p>Les nouveaux parfums à pschitter 2019</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a className="imgover" href="#"><img src="https://resize.prod.femina.ladmedia.fr/r/,550/img/var/2018-09/jean-louis-david-6.jpg" alt /></a>
                    <figcaption>
                      <h6 className="heading">Coiffure</h6>
                      <div>
                        <p>10 Coupe de cheveux tendance 2019</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a className="imgover" href="#"><img src="http://s.plurielles.fr/mmdia/i/43/4/femme-qui-se-maquille-10860434tdhgr_2041.jpg?v=1" alt /></a>
                    <figcaption>
                      <h6 className="heading">Maquillage</h6>
                      <div>
                        <p>On adopte la bonne mine avec les nouveautés fonds de teint !</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>
        
            <hr className="btmspace-80" />                     
            <div className="sectiontitle">
                <p className="nospace font-xs">Ma beauté ,ma perle de ma vie ! </p>
                <p className="heading underline font-x2">Astuces Beauté </p>
            </div>
            <div >
            
            <section className="group">
              <div className="one_half first"><img className="inspace-15 borderedbox" src="https://blog-beaute.fr/wp-content/uploads/sites/7/2015/01/femme-beaut%C3%A9-2.jpg" alt /></div>
              <div className="one_half">
                <ul className="nospace group inspace-15">
                  <li className="one_half first btmspace-50">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>3 astuces pour se réveiller avec une belle peau</a></h6>
                      <p className="nospace">Vous allez vous coucher après une longue journée et vous vous réveillez encore plus belle que la veille... Rêve ou réalité ? Suivez nos 3 conseils pour embellir votre peau, les yeux fermés...</p>
                    </article>
                  </li>
                  <li className="one_half btmspace-50">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>3 astuces pour poser parfaitement ses faux-cils</a></h6>
                      <p className="nospace">Vous voulez porter des faux-cils le temps d’une journée, ou pour parfaire un make-up de soirée ? Voici 3 astuces pour un résultat nickel !...</p>
                    </article>
                  </li>
                  <li className="one_half first">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Épilateur électrique : 5 astuces pour réduire la douleur</a></h6>
                      <p className="nospace">Retirer ses poils avec l’épilateur électrique peut être un moment peu agréable et douloureux pour beaucoup de femmes. Comment avoir moins mal ? Suivez nos astuces !...</p>
                    </article>
                  </li>
                  <li className="one_half">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Soins de nuit : nos conseils pour avoir une jolie peau</a></h6>
                      <p className="nospace">Les trois premières heures du sommeil, sont les plus importantes pour la peau car c’est là qu’elle se régénère le plus. Voici toutes les clés pour en profiter pleinement et se réveiller encore plus belle....</p>
                    </article>
                  </li>
                </ul>
              </div>
            </section>
            </div>  
            </main>
        </div>        
        </div>
        <div className="wrapper row2">
          <div className="hoc container clear"> 
            {/* ################################################################################################ */}
            <div className="sectiontitle">
              <p className="nospace font-xs">Ma beauté ,ma perle de ma vie !</p>
              <p className="heading underline font-x2">Soins Beauté</p>
            </div>
            <ul className="nospace group team">
              <li className="one_quarter first">
                <figure><a className="imgover" href="#"><img src="https://resize.prod.docfr.doc-media.fr/img/var/doctissimo/storage/images/media/images/peau-seche-5-art/3781928-1-fre-FR/peau-seche-5-art.jpg" alt /></a>
                  <figcaption>Peau normale, peau sèche : quel hydratant pour moi ?</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://file1.topsante.com/var/topsante/storage/images/beaute-et-soins/soins-du-corps/mains-et-pieds/15-minutes-pour-reparer-ses-mains/91648-2-fre-FR/15-minutes-pour-reparer-ses-mains_exact1024x768_l.jpg" alt /></a>
                  <figcaption>3 recettes de masques maison pour des mains parfaites</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://file1.bibamagazine.fr/var/bibamagazine/storage/images/beaute/soins-visage-corps/pollution-comment-bien-nettoyer-la-peau-61916/469129-1-fre-FR/Pollution-comment-bien-nettoyer-la-peau_exact1024x768_l.jpg" alt /></a>
                  <figcaption>Eau micellaire et tonique, le duo malin pour un nettoyage impeccable</figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315097/huile-essentielle-eucalyptus.jpg?v1/cover=540x405" alt /></a>
                  <figcaption>Huile essentielle d’Eucalyptus : comment l’utiliser en beauté ?</figcaption>
                </figure>
              </li>
            </ul>
            <br/>
            <div style={{textAlign :'center'}}>
            <MDBBtn color="secondary" size="sm">
              <MDBIcon far icon="clone" className="left" /> 
                Autres Soins ...
            </MDBBtn>
            </div>
            {/* ################################################################################################ */}
          </div>
        </div>        
<Footer/>
        
        


</div> 
        
        );
    }
}
 
export default Beaute;