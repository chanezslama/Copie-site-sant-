import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import Accueil from './accueil.jpg';
import {Link} from 'react-router-dom';
import { MDBAnimation } from "mdbreact";

class HomeContent extends Component {
    render() { 
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
        <div className="bgded" style={{ backgroundImage : 'url(' + Accueil + ')'}}>
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
          
          <div className="overlay" >
          <div id="pageintro" className="hoc clear">
           <MDBAnimation type="zoomIn">  
            <article>
              <h4 >Trouvez le médecin le plus proche et prenez un rendez-vous en ligne</h4>
              <p>Besoin d'un RDV rapidement avec un professionnel de santé ?</p>
              <footer><a className="btn" href="#">Prener un rendez-vous en ligne </a></footer>
            </article></MDBAnimation>
          </div>
        </div>
        
        </div>
        <div className="wrapper row3">
          <main className="hoc container clear"> 
            {/* <section id="introblocks">
              <ul className="nospace group btmspace-80">
                <li className="one_third first">
                  <figure><a className="imgover" href="#"><img src="http://www.wapi.cd/uploads/images/docteur-fox.jpg" alt /></a>
                    <figcaption>
                      <h6 className="heading">Espace Docteur </h6>
                      <div>
                        <p>Trouvez le médecin le plus proche et prenez un rendez-vous en ligne</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a className="imgover" href="#"><img src="https://www.risoul.com/medias/images/prestataires/multitailles/1920x1440_15910-pharmacie_des_taillades_taillades_1361551089.jpg" alt /></a>
                    <figcaption>
                      <h6 className="heading">Espace Pharmacie</h6>
                      <div>
                        <p>Trouvez la pharmacie la plus proche de votre localisation</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a className="imgover" href="#"><img src="" alt /></a>
                    <figcaption>
                      <h6 className="heading">Espace Médicaments</h6>
                      <div>
                        <p> Guide pour mieux comprendre la prescription de votre médecin. </p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section> */}
            <div className="sectiontitle">
              <p className="nospace font-xs">Découvrez les dernières actualités et découvertes de la santé.</p>
              <p className="heading underline font-x2">Nos  dernières actualités</p>
            </div>







            
            {/* <section className="group">
              <div className="one_half first"><img className="inspace-15 borderedbox" src="https://www.selection.ca/wp-content/uploads/sites/15/2011/02/perte-de-poids-pour-de-bon.jpg" alt /></div>
              <div className="one_half">
                <ul className="nospace group inspace-15">
                  <li className="one_half first btmspace-50">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Perte de poids et reéquilibrage alimentaire</a></h6>
                      <p className="nospace">Vous avez décidé de perdre du poids durablement sans y laisser votre santé ? Vous souhaitez tonifier votre ligne ou acquérir de bonnes règles alimentaires ?... </p>
                    </article>
                  </li>
                  <li className="one_half btmspace-50">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Arrêter de fumer sans grossir à l’arrêt du tabac</a></h6>
                      <p className="nospace">Arrêter de fumer c’est tout un combat. Mais voilà, ce n’est que le début, car ensuite, il faut lutter contre ces petits kilos superflus qui veulent prendre la place de la cigarette...</p>
                    </article>
                  </li>
                  <li className="one_half first">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>Addiction au sucre : comment arrêter le sucre </a></h6>
                      <p className="nospace">Quand on pense au sucre, on imagine des pâtisseries, des biscuits ou encore des bonbons. En réalité, le sucre est omniprésent dans notre alimentation, en particulier dans les produits industriels...</p>
                    </article>
                  </li>
                  <li className="one_half">
                    <article>
                      <h6 className="heading"><a href="#" style={{color:'#B946AD'}}>20 astuces pour manger moins</a></h6>
                      <p className="nospace">Maigrir sans faire trop d’efforts c’est possible. L’une des options est de tromper la faim pour réduire l’ingestion de calories.Si vous voulez perdre du poids sans suivre un régime strict...</p>
                    </article>
                  </li>
                </ul>
              </div>
            </section> */}
            <div className="clear" />
          </main>
        </div>
        <div className="wrapper row2">
          <div className="hoc container clear"> 
            <div className="sectiontitle">
              <p className="nospace font-xs">On n'obtient rien sans peine !</p>
              <p className="heading underline font-x2">Savoir plus à propos nos experts coachs minceur</p>
            </div>


  <div className="d-flex text-center my-5  justify-content-between" >           



    <div className ="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className ="avatar mx-auto">
        <img src="https://trainme.co/img/profile/d645920e395fedad7bbbed0eca3fe2e0.jpg" className ="rounded-circle z-depth-1"
          alt="Sample avatar"/>
      </div>
      <h5 className ="font-weight-bold mt-4 mb-3">DRISS MOHAMED </h5>
      <p className ="text-uppercase"><strong>Coach minceur</strong></p>
      <p className ="grey-text">Comme étant un Professionnel depuis plus de 5 ans du coaching personnel à domicile,j'ai coaché en matière d'amincissement...</p>
      <ul className ="list-unstyled mb-0">
        <a className ="p-2 fa-lg fb-ic">
          <i className ="fab fa-facebook-f"> </i>
        </a>
        <a className ="p-2 fa-lg tw-ic">
          <i className ="fab fa-twitter"> </i>
        </a>
        <a className ="p-2 fa-lg ins-ic">
          <i className ="fab fa-instagram"> </i>
        </a>
      </ul>
    </div>
    <div className ="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className ="avatar mx-auto">
        <img src="https://www.nutrisimple.com/media/2386/photo-alexandra.jpeg?mode=crop&anchor=top&width=260&height=260&rnd=131423469080000000" className ="rounded-circle z-depth-1"
          alt="Sample avatar"/>
      </div>
      <h5 className ="font-weight-bold mt-4 mb-3">DRIDI AFEF</h5>
      <p className ="text-uppercase"><strong>nutritionniste</strong></p>
      <p className ="grey-text">Mieux se connaître et mieux comprendre son désir de perdre du poids est une étape essentielle qui complète les conseils ...</p>
      <ul className ="list-unstyled mb-0">
        <a className ="p-2 fa-lg fb-ic">
          <i className ="fab fa-facebook-f"> </i>
        </a>
        <a className ="p-2 fa-lg tw-ic">
          <i className ="fab fa-twitter"> </i>
        </a>
        <a className ="p-2 fa-lg ins-ic">
          <i className ="fab fa-instagram"> </i>
        </a>
      </ul>
    </div>
    <div className ="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className ="avatar mx-auto">
        <img src="https://www.nutrisimple.com/media/2373/photo-elisabeth.jpeg?mode=crop&anchor=top&width=260&height=260&rnd=131423453340000000" className ="rounded-circle z-depth-1"
          alt="Sample avatar"/>
      </div>
      <h5 className ="font-weight-bold mt-4 mb-3">ATTIA AROUA</h5>
      <p className ="text-uppercase"><strong>Dietéticienne</strong></p>
      <p className ="grey-text">Je vous aide et vous accompagne  à trouver le bon équilibre alimentaire pour avoir une hygiène de vie saine ou pour essayer de perdre du poids...</p>
      <ul className ="list-unstyled mb-0">
        <a className ="p-2 fa-lg fb-ic">
          <i className ="fab fa-facebook-f"> </i>
        </a>
        <a className ="p-2 fa-lg tw-ic">
          <i className ="fab fa-twitter"> </i>
        </a>
        <a className ="p-2 fa-lg ins-ic">
          <i className ="fab fa-instagram"> </i>
        </a>
      </ul>
    </div>

</div>


            {/* <ul className="nospace group team">
              <li className="one_quarter first">
                <figure><a className="imgover" href="#"><img src="https://trainme.co/img/profile/d645920e395fedad7bbbed0eca3fe2e0.jpg" alt /></a>
                  <figcaption><strong>Driss Mohamed</strong> 
                  <em>
                  <MDBIcon icon="quote-left" size="1x" pull="left" border />
                  D'un côté du monde, les gens luttent pour se nourrir, de l'autre, ils payent pour maigrir.
                  </em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://ta.azureedge.net/p/images/usuarios/xl/_Qjxvadv1UhPWUUqtEiXR6RPj6nRw2pA0.jpg/600x600cut/" alt /></a>
                  <figcaption><strong>Ben Salah Aroua</strong> 
                  <em>
                  <MDBIcon icon="quote-left" size="1x" pull="left" border />
                  Pour maigrir, rien ne sert de se priver, mieux vaut manger de tout, raisonnablement.
                  </em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="http://www.coachclub.com/hp/wp-content/uploads/2016/05/jessica-mellet.jpg" alt /></a>
                  <figcaption><strong>Dridi Rania</strong>
                  <em>
                  <MDBIcon icon="quote-left" size="1x" pull="left" border />
                  L'idée de pouvoir maigrir au moins de devenir invisible lui provoquera un agréable serrement d'estomac.
                  </em></figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure><a className="imgover" href="#"><img src="https://media.fitnessboutique.fr/product_images/fitd16009lxl/fitd16009lxl_principale_m.jpg" alt /></a>
                  <figcaption><strong>Jbeli Oussema</strong>
                  <em>
                  <MDBIcon icon="quote-left" size="1x" pull="left" border />
                  Il faut maigrir pour manger moins, lorsqu'il n'y a personne pour vous aimer autour , ça devient de la graisse.     
                  </em></figcaption>
                </figure>
              </li>
            </ul> */}
            {/* ################################################################################################ */}
          </div>
        </div>
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
       
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
            </main>
           </div> 


          </div>
            {/* ################################################################################################ */}

        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        <div className="wrapper bgded overlay" >
          <section id="testimonials" className="hoc container clear"> 
            {/* ################################################################################################ */}
            <div className="sectiontitle">
              <p className="nospace font-xs">Celui qui aime à apprendre est bien près du savoir.</p>
              <p className="heading underline font-x2">Quiz Santé !</p>
            </div>
            <article className="btmspace-80">
              <blockquote>Pour mieux gérer son capital santé, encore faut-il être sûr(e) de ne pas commettre d'impairs. Fatigue, ménopause, tabagisme, vaccination ou infections sexuellement transmissibles... nos quiz santé sont à faire et refaire jusqu'au sans faute !</blockquote>
            </article>
            <footer className="center"><a className="btn" href="#">Commence le Test</a></footer>
            {/* ################################################################################################ */}
          </section>
        </div>
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        <div className="wrapper row3">
          <section className="hoc container clear"> 
            {/* ################################################################################################ */}
            <div className="sectiontitle">
              <p className="nospace font-xs">Felis dictum viverra mauris dui</p>
              <p className="heading underline font-x2">Phasellus nunc erat cursus</p>
            </div>
            <ul id="latest" className="nospace group">
              <li className="one_third first">
                <article><a className="imgover" href="#"><img src="images/demo/348x261.png" alt /></a>
                  <ul className="nospace meta clear">
                    <li><i className="fas fa-user" /> <a href="#">Admin</a></li>
                    <li><i className="fas fa-comments" /> <a href="#">Comments (10)</a></li>
                  </ul>
                  <div className="excerpt clear">
                    <h6 className="heading">Aliquet tincidunt vel vulputate egestas leo</h6>
                    <time dateTime="2045-04-05T08:15+00:00"><strong>05</strong> <em>Apr</em></time>
                    <p>Integer id justo ut diam suscipit laoreet quisque bibendum dolor at ultricies vestibulum risus…</p>
                  </div>
                  <footer><a className="btn" href="#">Read More</a></footer>
                </article>
              </li>
              <li className="one_third">
                <article><a className="imgover" href="#"><img src="images/demo/348x261.png" alt /></a>
                  <ul className="nospace meta clear">
                    <li><i className="fas fa-user" /> <a href="#">Admin</a></li>
                    <li><i className="fas fa-comments" /> <a href="#">Comments (10)</a></li>
                  </ul>
                  <div className="excerpt clear">
                    <h6 className="heading">Dui eleifend elit ac ullamcorper libero tellus</h6>
                    <time dateTime="2045-04-04T08:15+00:00"><strong>04</strong> <em>Apr</em></time>
                    <p>Vel turpis quisque blandit metus ut tellus in mauris vivamus faucibus vivamus egestas lobortis…</p>
                  </div>
                  <footer><a className="btn" href="#">Read More</a></footer>
                </article>
              </li>
              <li className="one_third">
                <article><a className="imgover" href="#"><img src="images/demo/348x261.png" alt /></a>
                  <ul className="nospace meta clear">
                    <li><i className="fas fa-user" /> <a href="#">Admin</a></li>
                    <li><i className="fas fa-comments" /> <a href="#">Comments (10)</a></li>
                  </ul>
                  <div className="excerpt clear">
                    <h6 className="heading">Odio curabitur id neque sed urna facilisis blandit</h6>
                    <time dateTime="2045-04-03T08:15+00:00"><strong>03</strong> <em>Apr</em></time>
                    <p>Donec quis metus vel tortor porttitor pretium cras at justo nullam at lacus id metus pulvinar…</p>
                  </div>
                  <footer><a className="btn" href="#">Read More</a></footer>
                </article>
              </li>
            </ul>
            {/* ################################################################################################ */}
          </section>
        </div>
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        <div className="wrapper coloured">
          <section id="ctdetails" className="hoc clear"> 
            {/* ################################################################################################ */}
            <ul className="nospace clear">
              <li className="one_quarter first">
                <div className="block clear"><a href="#"><i className="fas fa-phone" /></a> <span><strong>Contactez-nous sur:</strong> +(216) 73 25 47 23</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="#"><i className="fas fa-envelope" /></a> <span><strong>Envoyez-nous un mail:</strong> INFO@EHYGIENE.COM </span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="#"><i className="fas fa-clock" /></a> <span><strong> Lundi - Vendredi:</strong> 08h:00 - 16h:00</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="#"><i className="fas fa-map-marker-alt" /></a> <span><strong>Visitez-nous:</strong> <a href="#">Notre local</a></span></div>
              </li>
            </ul>
            {/* ################################################################################################ */}
          </section>
        </div>
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}

        </div>
         );
    }
}
 
export default HomeContent;