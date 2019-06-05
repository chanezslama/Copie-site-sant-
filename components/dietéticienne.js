import React, { Component } from 'react';
import { MDBRow, MDBCol,MDBIcon } from 'mdbreact';


class Dietéticienne extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div style={{ margin : '50px'}}>
            <p style={{fontSize : '17px' , textAlign :'center' , padding :'20px'}}> 
            Problème de surpoids, maladie chronique... Parfois, manger sainement ne s'improvise pas. Il est ainsi parfois nécessaire de consulter un diététicien, afin de mieux équilibrer son régime alimentaire. E-Hygiène vous recommande de <strong> notre expert Dietéticienne ATTIA AROUA.</strong>
            </p> 
            <MDBRow>
              <MDBCol lg="5" className="text-center text-lg-left">
                <br/>

                <img
                  className="img-fluid z-depth-5"
                  src="https://www.espacediet.be/images/galerie/consultation-dietetique.jpg"
                  alt=""
                />

              </MDBCol>
              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Méthode suivie par notre Dietéticienne ATTIA AROUA </h5>
                    <p className="grey-text" style={{ textAlign :'justify'}}>
                        Notre expert aide et accompagne les patients à trouver le bon équilibre alimentaire pour avoir une hygiène de vie saine ou pour essayer de perdre du poids (ou d’en gagner mais c’est plus rare).
                        En fonction du rythme de vie, de l’état de santé et des troubles alimentaires de ses patients, elle élabore des menus sur-mesure pour chaque repas tout en veillant à respecter l’équilibre alimentaire et en conservant le plaisir de manger. Notre expert s’adapter à chaque type de clients (enfants, personnes âgées…) et doit adapter ses menus en y intégrant des protéines, des glucides, des lipides, des vitamines…
                         En cabinet, les patients ont souvent un problème de surpoids, d’obésité, de diabète… Après avoir établi un diagnostic, le diététicien fixe des objectifs et détermine les moyens afin de retrouver cet équilibre alimentaire perdu. Il donne des conseils sur les modes de cuisson et dresse la liste des aliments interdits, des différents aliments obligatoires et conseillés et indique la ration que doit prendre le patient.
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
 
export default Dietéticienne;