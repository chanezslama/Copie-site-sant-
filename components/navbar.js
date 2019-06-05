import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Navbar extends Component {
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
 
        {/* style={{ backgroundImage : 'url(' + fondecran + ')'}} */}
        <div className="bgded">       
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
        </div>
    </div>
         );
    }
}
 
export default Navbar;