import React, { Component } from 'react';
import { MDBRow, MDBCol,MDBIcon } from 'mdbreact';


class Coach extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div style={{ margin : '50px'}}>
            <p style={{fontSize : '17px' , textAlign :'center' , padding :'20px'}}> 
            Depuis quelques années, le terme "coaching" semble omniprésent. Mais ce succès apparent du coach et du coaching se justifie-t-il ? Bénéficier de conseils personnalisés, d'un suivi et soutien moraux, est-ce un réel besoin de nos sociétés modernes ou s'agit-il uniquement d'un phénomène de mode ?  Je suis bien placé pour savoir que seuls sont probants les services d'un coach qui aboutissent à un résultat mesurable, tout au plus incontestable pour la personne coachée et son coach.
            </p> 

            <MDBRow>
              <MDBCol lg="5" className="text-center text-lg-left">
 
                <img
                  className="img-fluid z-depth-5"
                  style={{marginLeft : '50px'}}
                  src="https://trainme.co/img/profile/d645920e395fedad7bbbed0eca3fe2e0.jpg"
                  alt=""
                />

              </MDBCol>
              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Vision du coaching via notre expert coaching Driss Mohamed </h5>
                    <p className="grey-text" style={{ textAlign :'justify'}}>
                    Comme étant un Professionnel depuis plus de 5 ans du coaching personnel à domicile,j'ai coaché en matière d'amincissement un grand nombre de personnes. L'expérience m'a appris que la clé d'une réussite tient plus dans la mise en place d'une nouvelle façon de vivre que dans la restriction alimentaire passagère, ou l'activité physique à outrance. Un bon coach se différencie d'un professeur en ce sens qu'il doit intégrer dans son approche les capacités, la motivation et le plaisir de ses élèves.
                    Le métier de coach n'a de sens que dans la motivation de la personne à atteindre un but qu'elle s'est fixée elle-même, pour autant que ce but s'inscrive, d'une part dans les limites de ses capacités, et d'autre part dans le cadre d'un plaisir de l'effort. L'aide extérieure du coach se résume au fond à accompagner les personnes dans la compréhension d'elles-mêmes et dans la concrétisation durable de leur mieux-être.
                    A ce titre l'amincissement par le sport et l'alimentation équilibrée sont bel et bien un projet à long terme.
                    En effet l'élève d'un coach acquiert une stimulation et un savoir de départ devant lui assurer au final une vraie autonomie. L'essence du coach est dans l'éphémère, le passage de témoin ; néanmoins son message doit s'inscrire dans la continuité existentielle de ses élèves.
                    </p>
                  </MDBCol>
                </MDBRow>

              </MDBCol>
            </MDBRow>
            </div>

            </div>
         );
    }
}
 
export default Coach;