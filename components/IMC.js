import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBIcon} from 'mdbreact';
import {MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class IMC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom :'',
            weight : null,
            size : null,
            desiredweight :null,
            modal14: false
         }
    }

    
    componentDidMount=()=>{
      this.setState({
          ...this.props.IMClist.filter(el=>el._id===this.props._id)[0]
      }) 
  } 

  add=()=>{
    axios.post('/add_IMC',{...this.state})
    .then(()=>this.props.addIMC({...this.state}))
    .catch((err)=>alert(err))
  }


    
    toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
    }
    alert = null
    alertColor = null
    createAlert = ()=>{
      if (this.state.weight === null || this.state.size === null || this.state.size === 0 || this.state.size === "" || this.state.weight === "" || this.state.nom ==="") {
        this.alert = null
        this.alertColor = null
      }
      else{
        let resultat = this.state.weight/(this.state.size*this.state.size)
        if (resultat <16){
          this.alert = "Vous êtes en situation de Maigreur extrême : Votre poids apparaît très insuffisant en regard de votre taille. Cette maigreur excessive peut être la conséquence d’une maladie ou de troubles du comportement alimentaire, et elle peut aussi être elle-même à l'origine d'autres maladies. Il est utile que vous consultiez un médecin afin qu'il constate l'ampleur de l'insuffisance pondérale et en recherche la cause éventuelle. Il pourra également vous faire une proposition de traitement si nécessaire."
          this.alertColor = "alert alert-primary"
        }
        else if (16<= resultat && resultat < 18.5){
          this.alert = "Vous êtes en situation de Maigreur : Vous êtes un peu trop maigre par rapport à votre taille. Pas question de vous culpabiliser pour autant, un IMC légèrement sous la barre normale de 18,5 n’est pas toujours problématique. Les personnes grandes et minces par exemple peuvent présenter un IMC un peu faible, tout en gardant une corpulence normale."
          this.alertColor = "alert alert-primary"
        }
        else if (18.5<= resultat && resultat < 25){
          this.alert = "Votre corpulence est Normale : Votre poids est idéal compte tenu de votre taille. Une alimentation équilibrée, sans excès de matières grasses, et une activité physique régulière comme la marche, la natation ou le vélo vous aideront à maintenir votre poids idéal."
          this.alertColor = "alert alert-success"
        }
        else if (25<= resultat && resultat < 30){
          this.alert = " Vous êtes en Surpoids : Votre poids apparaît modérément excessif compte tenu de votre taille. Ce surpoids peut augmenter votre risque de maladies, en particulier de troubles cardiaques ou vasculaires et de diabète. Ce risque peut se cumuler avec d'autres, provoqués par le tabagisme, l'hypertension ou le cholestérol. Si vous présentez déjà un de ces facteurs de risque, une perte de poids vous sera bénéfique. Une alimentation moins riche en graisses, davantage de fruits et de légumes et une activité physique régulière vous permettront sans doute de retrouver un poids idéal. Votre médecin sera le mieux à même de vous donner les conseils adaptés pour atteindre cet objectif."
          this.alertColor = "alert alert-warning"
        }
        else if (30<= resultat && resultat < 35){
          this.alert = "Vous êtes en situation d’obésité modérée(Classe 1) : Votre poids est beaucoup trop important compte tenu de votre taille. Vous souffrez d'obésité, une obésité dite modérée ou de stade 1. Cela signifie que vous êtes exposé à un risque non négligeable d’être victime de maladies cardiaques (infarctus), vasculaires (accident vasculaire cérébral, insuffisance veineuse) ou métaboliques (diabète).Cette obésité peut aussi être à l'origine d'essoufflement, de fatigue, de douleurs dorsales ou articulaires et difficultés psychologiques qui perturbent sérieusement vos activités quotidiennes. Heureusement, même une perte de poids modérée (5 à 10 %) peut avoir un effet positif sur votre santé et votre mental, à condition bien sûr de ne pas reprendre les kilos perdus ."
          this.alertColor = "alert alert-danger"
        }
        else if (35<= resultat && resultat < 40){
          this.alert = " Vous être en situation d’obésité sévère (Obésité modérée Classe 2) : Votre poids est beaucoup trop important compte tenu de votre taille. Vous souffrez d'obésité, une obésité dite sévère ou de stade 2. Cela signifie que vous êtes exposé à un risque important de maladies cardiaques (infarctus), vasculaires (accident vasculaire cérébral, insuffisance veineuse) ou métaboliques (diabète).Cette obésité peut aussi être à l'origine d'essoufflement, de fatigue, de douleurs dorsales ou articulaires et difficultés psychologiques qui perturbent sérieusement vos activités quotidiennes. Une perte de poids s’impose ! Pour vous y encourager, sachez que même une même une perte de poids modérée (5 à 10 %) aura un effet positif sur votre santé et votre mental. Vous en ressentirez immédiatement les effets."
          this.alertColor = "alert alert-danger"
        }
        else if (40<= resultat ){
          this.alert = "Vous être en situation d’obésité morbide ou massive : Votre poids est beaucoup trop important compte tenu de votre taille. Vous souffrez d'obésité, une obésité dite sévère ou de stade 3. Cela signifie que vous êtes exposé à un risque important de maladies cardiaques (infarctus), vasculaires (accident vasculaire cérébral, insuffisance veineuse) ou métaboliques (diabète).Cette obésité peut aussi être à l'origine d'essoufflement, de fatigue, de douleurs dorsales ou articulaires et difficultés psychologiques qui perturbent sérieusement vos activités quotidiennes. Une perte de poids s’impose ! Pour vous y encourager, sachez que même une même une perte de poids modérée (5 à 10 %) aura un effet positif sur votre santé et votre mental. Vous en ressentirez immédiatement les effets."
          this.alertColor = "alert alert-danger"
        }
      }
    }
  
    handleChange = (e, name)=>{
      this.setState({
        [name]: e.target.value
      })
    }
    
    render() { 
      let resultat = this.state.weight/(this.state.size*this.state.size)
      this.createAlert()
        return ( 
        
        <div>
         <Navbar/>   
            <div className="hoc container clear"> 
              <div className="sectiontitle">
                <p className="heading underline font-x2"> Calcul de votre indice de masse corporelle (IMC)</p>
              </div>
            <article className="hoc container clear"> 
                <div className="one_half first" style={{textAlign : 'justify'}}>
                    
                    <p><b>L'indice de masse corporelle (IMC) </b> permet d’évaluer rapidement votre corpulence simplement avec votre poids et votre taille, quel que soit votre sexe. Calculez rapidement votre IMC et découvrez dans quelle catégorie vous vous situez.</p>
                    <p className="btmspace-30">L’indice de masse corporelle (IMC) est le seul indice validé par l’Organisation mondiale de la santé pour évaluer la corpulence d’un individu et donc les éventuels risques pour la santé. L’IMC permet de déterminer si l’on est situation de maigreur, de surpoids ou d’obésité par exemple.</p>
                    <footer><a className="btn" href="#">Lire plus à propos IMC...</a></footer>
                </div>
                
                <div className="one_half"><a className="imgover" href="#"><img className="borderedbox inspace-10" src="https://www.laurand.com/wp-content/uploads/2015/04/calcul-IMC-age.png" alt /></a></div>
            </article>
            <article className="hoc container clear">

            <h6 className="heading font-x3" style={{textAlign :'center'}} >Comment interpréter notre IMC ?</h6><br/>

                 
                <div className="one_half first" ><img className="borderedbox inspace-10" src="https://i.skyrock.net/0144/34270144/pics/1885037801_1.jpg" alt />
                <br/>
                <br/>
                <br/>

                <p>Un IMC dit <span style={{color :'#00ff00'}}><b> normal </b></span>est compris entre <span style={{color :'#00ff00'}}><b>18,5 et 24,9 kg/m²</b></span>. Si votre résultat est inférieur à 18,5, votre corpulence est considérée comme maigre. Au-delà de 24,9, vous êtes soit en surpoids (entre 25 et 30), soit en obésité (>30), soit en obésité massive (>40). C’est à travers cette lecture qu’intervient toute l’utilité de calculer son IMC.</p>
                </div>
                <div className="one_half">
                  <MDBRow>
                    <MDBCol md="12">
                      <MDBCard>
                        <MDBCardBody>
                          <form>
                            <p className="h4 text-center py-4">Test d'affinité minceur</p>
                            <label
                              htmlFor="defaultFormCardNameEx"
                              className="grey-text font-weight-light"
                            >
                            J'écris votre nom
                            </label>
                            <input
                              type="text"
                              placeholder="nom..."
                              value={this.state.nom}
                              onChange={ (e) => this.handleChange(e, 'nom')}
                              id="defaultFormCardNameEx"
                              className="form-control"
                            />
                            <br />
                            <label
                              htmlFor="defaultFormCardNameEx"
                              className="grey-text font-weight-light"
                            >
                              Je mesure (en m)
                            </label>
                            <input
                              type="number"
                              step='0.01'
                              min="0"
                              placeholder="0.00"
                              value={this.state.size}
                              onChange={ (e) => this.handleChange(e, 'size')}
                              id="defaultFormCardNameEx"
                              className="form-control"
                            />
                            <br />
                            <label
                              htmlFor="defaultFormCardEmailEx"
                              className="grey-text font-weight-light"
                            >
                              Je pèse (en Kg)
                            </label>
                            <input
                              type="number"
                              min="0"
                              placeholder="0"
                              value={this.state.weight}
                              onChange={ (e) => this.handleChange(e, 'weight')}
                              id="defaultFormCardEmailEx"
                              className="form-control"
                            />
                            <br />
                            <label
                              htmlFor="defaultFormCardEmailEx"
                              className="grey-text font-weight-light"
                            >
                              Je voudrais peser (en Kg)
                            </label>
                            <input
                              type="number"
                              min="0"
                              placeholder="0"
                              value={this.state.desiredweight}
                              onChange={ (e) => this.handleChange(e, 'desiredweight')}
                              id="defaultFormCardEmailEx"
                              className="form-control"
                            />
                            <div className="text-center py-4 mt-3">
                              <MDBBtn 
                              color='light' 
                              onClick={this.toggle(14)}>
                              Je valide mes informations <MDBIcon  icon="weight" />
                              </MDBBtn>

                              <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                                <MDBModalHeader toggle={this.toggle(14)}>Bonjour {this.state.nom}</MDBModalHeader>
                                <MDBModalBody>
                                  <h5>Votre Indice de Masse Corporelle (IMC) est :{resultat.toFixed(2)}</h5>
                                  <div className="pt-3 text-center">         
                                    <div className={this.alertColor}>  
                                      <p>{this.alert}</p>
                                    </div>
                                  </div>
                                </MDBModalBody>
                                <MDBModalFooter>
                                  <MDBBtn outline color="secondary" onClick={this.toggle(14)}>
                                  <MDBIcon icon="angle-double-left" /> Fermer</MDBBtn>

                                  
                                  <Link to='/stepperquiz'>
                                  <MDBBtn outline onClick={this.add}>
                                  Commencer votre défi <MDBIcon icon="angle-double-right" />
                                  </MDBBtn>
                                  </Link>
                                  
                                </MDBModalFooter>
                              </MDBModal>
                              
                            </div>
                          </form>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>

                </div>          
            </article>
            <div className="sectiontitle">
                <p className="heading underline font-x2"> Avantages et inconvénients de L'IMC</p>
            </div>
            <div style={{fontSize : '18px'}}>
              <p>
              Les avantages de l’IMC sont les suivants :<br/>
              <ul>
                <li>Facilité de calcul qui ne nécessite que le poids et la taille, à travers une formule simple.</li>
                <li>Indicateur généralisé de manière « internationale », permettant donc de faire des statistiques à l’échelle mondiale.</li>
              </ul>
              Mais cette facilité de calcul ainsi que cette généralisation internationale font apparaitre les inconvénients suivants :
              <ul>
                <li>La silhouette n’est pas prise en compte.</li>
                <li>L’histoire du poids n’est pas prise en compte.</li>
                <li>Des éléments déterminants comme le sexe, l’âge ou encore l’origine ethnique ne sont pas pris en compte.</li>
              </ul>
              Ces inconvénients peuvent donc introduire des biais dans le résultat de l’IMC.
              </p>
            </div>
    </div>
              
<Footer/>       
</div>
         
        );
    }
}
const mapStateToProps=(state)=>{
  return{
    IMClist : state.reducerIMC,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addIMC:x=>{
      dispatch({
        type : 'ADD_IMC',
        newIMC:x
      })
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(IMC);