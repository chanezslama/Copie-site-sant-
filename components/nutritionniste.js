import React, { Component } from 'react';
import { MDBRow, MDBCol,MDBIcon } from 'mdbreact';


class Nutritionniste extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

    <div>
        <div style={{ margin : '50px'}}>
        <p style={{fontSize : '17px' , textAlign :'center' , padding :'20px'}}>           
            Confronté au désarroi des personnes obsédées par les régimes,<b> DRIDI AFEF, notre expert en nutrition </b> invite depuis plus de vingt ans ses patients à réfléchir à leur "envie de maigrir" pour "maigrir intelligemment". Il a mis en place une méthode simple mais efficace : manger équilibré et en moins grande quantité, tout en augmentant les dépenses en énergie.  </p>      
        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
          <br/>
          <br/>
            <img
              className="img-fluid z-depth-5"
              src="https://humanis.com/sites/default/files/media/img1178-photo-dieteticien-nutritionniste-quelles-differences-entre-deux-metiers_0.jpg"
              alt=""
            />
            <br/>
            <br/>
 
            <img
              className="img-fluid z-depth-5"
              src="https://www.lesfurets.com/mutuelle-sante/guide/wp-content/uploads/sites/9/2016/06/remboursement-frais-nutritionniste-750x494.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3"> Méthode Dr AFEF : le travail sur soi est indispensable</h5>
                <p className="grey-text" style={{ textAlign :'justify'}}>
                Mieux se connaître et mieux comprendre son désir de perdre du poids est une étape essentielle qui complète les conseils nutritionnels à proprement parler. Selon Dr AFEF, il est donc important d'adapter le type de régime à l'état psychologique. "Les régimes les plus restrictifs ne peuvent être suivis que lorsque les conditions de vie sont optimales", écrit-il dans son livre "Au bonheur de maigrir". Quant aux compulsions alimentaires causées par des angoisses ou une dépression, elles risquent d'être aggravées par un régime frustrant. Le travail psychologique peut être long à porter ses fruits, mais il permettra d'éviter des échecs se soldant par une reprise de poids...
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg"/>
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Régime du Dr AFEF : pas de méthode miracle !</h5>
                <p className="grey-text" style={{ textAlign :'justify'}}>
                Fervent défenseur de l'alimentation saine, notre nutritionniste dénonce fréquemment les pilules miracles, les sachets de protéines et autres substituts. Il se livre à une analyse régulière des travers des produits agro-alimentaires, dont il accuse certains de nous faire grossir. Son dernier ouvrage "Maigrir, le grand mensonge" constitue d'ailleurs un pamphlet vigoureux contre les régimes déraisonnables.

                Selon elle, le secret pour mincir, et surtout pour rester mince, c'est l'éducation alimentaire : diversifier son alimentation, apprendre à manger de tout mais en quantités réduites pour limiter l'apport calorique. Chacun doit être maître de son régime pour limiter la frustration, que le nutritionniste considère comme "l'ennemi principal des régimes". Et parce qu'il attache une extrême importance à rééquilibrer l'assiette des Français, il intervient régulièrement depuis 1986 à titre d'expert spécialiste en nutrition notamment pour M6 dans le document "Vive la cantine !" diffusé en septembre 2006. En novembre 2006, il a  présenté sur la même chaîne "Vous êtes ce que vous mangez".

                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Régime AFEF : au choix 1200, 1400, 1600 ou 1800 kilocalories</h5>
                <p className="grey-text" style={{ textAlign :'justify'}}>
                Prendre en compte ses propres habitudes alimentaires en les intégrant dans un régime équilibré : voici le principe de base de la méthode AFEF. Le célèbre nutritionniste propose 4 niveaux caloriques, 1200, 1400, 1600 et 1800 kilocalories permettant un amaigrissement plus ou moins rapide en fonction de votre objectif et de votre corpulence.

                En principe, tout est autorisé, avec une quantité de sucre, de fibres et de protéines à répartir comme on veut sur la journée. Le régime propose les fruits et légumes, crus ou cuits, quasiment à volonté, ce qui permet de se sentir rassasié sans augmenter l'apport calorique. Les boissons sucrées ou alcoolisées sont les seuls interdits à respecter. Cependant, le but étant de ne pas culpabiliser, on peut "craquer" pour une pâtisserie ou un verre de vin de façon exceptionnelle. Rassurant, non ? Enfin, maigrir passant aussi par une dépense plus importante de calories, les exercices physiques sont donc préconisés. Quand on vous dit que la méthode Dr DRIDI AFEF est simple et de bon sens !

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
 
export default Nutritionniste ;