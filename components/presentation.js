import React, { Component } from 'react';
import Navbar from './navbar'
import Footer from './footer';


class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
    <div>
        <Navbar/>
        <div className="wrapper row3">
            <main className="hoc container clear"> 
            <hr className="btmspace-80" />
            <div >               
                <article>
                    <h6 className="heading" style={{color :'#b946ad'}}> <b>Qui Sommes nous ?</b></h6>
                    <h6 className="heading" ><b>Pour les patients:</b></h6>                      
                    <p className="nospace">Un doute, une inquiétude, besoin d’un conseil santé ? <b>E-hygiène </b>c’est la solution</p>
                    <p className="nospace"> <b>E-hygiène</b> est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement.</p>
                    <p className="nospace"><b>E-hygiène</b> vous permet de poser vos questions en ligne directement aux médecins en respectant les termes de confidentialité.</p>
                    <p className="nospace"><b>E-hygiène</b> est le Moteur de recherche pour trouver une pharmacie à proximité.</p>
                    <p className="nospace"><b>E-hygiène</b> c’est la base de données de la majorité des médicaments avec prix et indications.</p>
                    <p className="nospace"><b>E-hygiène</b> vous donne l’information sur les symptômes de maladie les plus courants.</p>
                    <p className="nospace"><b>E-hygiène</b> vous permet d'accéder à une alimentation saine et équilibrée et profiter d'une bonne hygiène de vie ?</p>

                </article>
                <br/>
                <article>
                    <h6 className="heading" ><b>Pour les professionnels de santé:</b></h6>                      
                    <p className="nospace">Un doute, une inquiétude, besoin d’un conseil santé ? <b>E-hygiène </b>c’est la solution</p>
                    <p className="nospace"> <b>E-hygiène</b> est un service complet de gestion de cabinet médical, qui optimise votre organisation et vous fait gagner du temps. Avec med.tn, vous partagez vos disponibilités en temps réel avec vos patients selon vos critères, tout en gardant la main sur votre agenda médical. </p>
                    <p className="nospace"><b>E-hygiène</b> vous permet d’entrer en contact directement avec des patients et de répondre à leurs interrogations.</p>
                </article>
                <br/>
                <br/>
                <h6 className="heading" >Notre objectif final est d'améliorer l'accès aux soins en mettant à votre disposition des outils simples et intuitifs pour que<b> chacun devienne acteur de sa santé et de son bien-être.</b></h6> 
            </div>
            <div className="clear" />
            </main>
        </div> 
        <Footer/>      
    </div> 
        );
    }
}
 
export default Presentation;