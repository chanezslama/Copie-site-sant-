import React, { Component } from 'react';
import footer from './footer.jpg'


class Footer extends Component {
    render() { 
        return (     
<div>
{/*  */}

<div className="bgded overlay row4" style={{backgroundImage: 'url(' + footer + ')'}} >
    <footer id="footer" className="hoc clear">        
        <div className="fl_left">
          <h6 className="heading">à propos de nous </h6>
          <ul className="nospace linklist">
            <li><a href="#" style={{color:'#B946AD'}}>Qui sommes nous ?</a></li>
            <li><a href="#" style={{color:'#B946AD'}}>Vous-êtes medecin </a></li>
            <li><a href="#" style={{color:'#B946AD'}}>Vous-êtes patient </a></li>
            <li><a href="#" style={{color:'#B946AD'}}>Questions à poser</a></li>
            <li><a href="#" style={{color:'#B946AD'}}>Contactez-nous</a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Envoyez votre Newsletter </h6>
          <p className="nospace btmspace-15">Notre équipe sera à votre disposition pour répondre à vos mails. </p>
          <form action="#" method="post">
            <fieldset>
              <legend>Newsletter:</legend>
              <input className="btmspace-15" type="text" defaultValue placeholder="Prénom" />
              <input className="btmspace-15" type="text" defaultValue placeholder="Email" />
              <button type="submit" value="submit">Envoi</button>
            </fieldset>
          </form>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Nisi nunc velit aliquam</h6>
          <ul className="nospace linklist">
            <li>
              <article>
                <p className="nospace btmspace-10"><a href="#" style={{color:'#B946AD'}}>Sapien sit amet tortor nulla vulputate odio in varius tristique nisi urna.</a></p>
                <time className="block font-xs" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
              </article>
            </li>
            <li>
              <article>
                <p className="nospace btmspace-10"><a href="#" style={{color:'#B946AD'}}>Consequat erat id rutrum nisi magna vel tellus phasellus malesuada bibendum.</a></p>
                <time className="block font-xs" dateTime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
              </article>
            </li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Notre localisation</h6>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "250px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
        </div>
       
    </footer>
  </div>
  <div className="wrapper row5">
      <div id="copyright" className="hoc clear"> 
            <p className="fl_left">Copyright © 2019 - Tous les droits sont réservés</p>
      </div>
  </div>  
</div> 
        );
    }
}
 
export default Footer;