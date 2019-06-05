import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import {Link} from 'react-router-dom';
import { MDBRow, MDBCol, MDBView, MDBMask,MDBIcon,MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import axios from 'axios';
import Nutritionniste from './nutritionniste';
import Dietéticienne from './dietéticienne';
import Coach from './coach'



class StepperQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
          question1:'',
          question2:'',
          question3:'',
          question4:'',
          question5:'',
          question6:'',
          question7:'',
          question8:'',
          question9:'',
         
          }
        }


    handleChange=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    componentDidMount=()=>{
      this.setState({
          ...this.props.REPONSElist.filter(el=>el._id===this.props._id)[0]
      }) 
  } 

  add=()=>{
    axios.post('/add_REPONSE',{...this.state})
    .then(()=>this.props.addreponse({...this.state}))
    .catch((err)=>alert(err))
  }



    render() {
  return(
 <div>
   <Navbar/>


   <div style={{marginTop : '30px', marginLeft : '150px'}}>
    <MDBRow>
      <MDBCol md="12" className="mb-4 ml-5">
        <MDBView zoom  className="d-flex justify-content-center">    
     <img style={{width:'700px',height:'400px'}}
     src="http://srilette.s.r.pic.centerblog.net/o/cd033258.jpg"/>
    
    <MDBMask> 
    <div style={{maxWidth:'700px'}} className="text-black d-flex flex-column align-items-center rgba-white-strong mt-5 px-4 rounded">
              
              <h3 className="mt-2 font-weight-bold" style={{padding :'20px'}}>
              Le coaching minceur, pourquoi ça marche ?
              </h3>
              <br/>
              <br/>

              <ul style={{fontSize : '20px'}}>
                <li>Vous perdez du poids en gardant le plaisir de manger</li>
                <li>Vous êtes accompagné et soutenu quotidiennement</li>
                <li>Vous bénéficiez d'un programme entièrement personnalisé</li>
                <li>Vous disposez d'outils pratiques pour avancer à votre rythme</li>
                <li>Vous prenez de nouvelles habitudes et constatez des résultats durables</li>
              </ul>
              
          </div>
          
    </MDBMask>
        </MDBView>
      </MDBCol> 
      </MDBRow> 
    </div>
    <div className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="heading underline font-x2"> Quelle solution minceur vous correspond le mieux ?</p>
        </div>
        <p style={{fontSize : '17px' , textAlign :'center'}}>Bonjour et bravo pour votre participation ! Voici un bref questionnaire pour faire le point sur vos habitudes alimentaires. Les questions sont très simples, cela ne vous prendra que deux minutes. </p>
    </div>




    <div className='d-flex' style={{ paddingLeft :'200px'}} >
    
    <MDBBtn  floating gradient="purple" disabled >Question1</MDBBtn>
    <div style={{ paddingTop :'4px'}}>
                <select className="browser-default custom-select"
                style={{ width :'800px', height :'43px'}}
                name="question1"
                onChange={this.handleChange}
                value={this.state.question1}
                >
                  <option>Où avez-vous le plus tendance à stocker vos kilos ?</option>
                  <option value="le Ventre et les hanches" > le Ventre et les hanches</option>
                  <option value="les Cuisses et les mollets" >les Cuisses et les mollets</option>
                  <option value="les bras et les épaules" > les bras et les épaules</option>
                  <option value="tout le corps" >tout le corps</option>

                </select>
            </div>
    </div>   
    
    
    <div className='d-flex' style={{ paddingLeft :'200px'}} >

    <MDBBtn floating gradient="purple" disabled > Question 2</MDBBtn>
    <div style={{ paddingTop :'4px'}}>
                <select className="browser-default custom-select"
                style={{ width :'800px', height :'43px'}}
                name="question2"
                onChange={this.handleChange}
                value={this.state.question2}
                >
                  <option>Selon vous, qu'est-ce qui vous empêche de perdre vos kilos?</option>
                  <option value="La frustration de devoir renoncer à certains aliments" >La frustration de devoir renoncer à certains aliments </option>
                  <option value="Un appétit d'ogre et ma gourmandise" >Un appétit d'ogre et ma gourmandise</option>
                  <option value="Mes émotions qui me poussent à me réfugier dans la nourriture" >Mes émotions qui me poussent à me réfugier dans la nourriture </option>
                  <option value="L'abondance d'aliments industriels gras et sucrés " >L'abondance d'aliments industriels gras et sucrés </option>
                  <option value="La difficulté à faire les bons choix alimentaires " >La difficulté à faire les bons choix alimentaires</option>
                  <option value="Le fait que les régimes ne soient pas bien adaptés à mon profil">Le fait que les régimes ne soient pas bien adaptés à mon profil</option>

                </select>
            </div>
    </div>

    <div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled > Question 3</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question3"
            onChange={this.handleChange}
            value={this.state.question3}
            >
              <option> Quel type d'excès ou d'écarts faites-vous le plus souvent ?</option>
              <option value="Le grignotage très souvent" >Le grignotage très souvent</option>
              <option value="Manger en trop grande quantité" > Manger en trop grande quantité</option>
              <option value=" Manger sans cesse à l'extérieur, au restaurant" > Manger sans cesse à l'extérieur, au restaurant </option>
              <option value=" Privilège des plats riches en matières grasses ou très sucrés" > Privilège des plats riches en matières grasses ou très sucrés</option>
              <option value="La consommation  d'alcool">La consommation  d'alcool</option>

            </select>
        </div>
</div>

<div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled > Question 4</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question4"
            onChange={this.handleChange}
            value={this.state.question4}
            >
              <option> Votre surpoids coïncide-t-il avec des changements dans votre mode de vie ?</option>
              <option value="Oui, ma vie stressante (travail, déménagement, rythme de vie...)" >Oui, ma vie stressante (travail, déménagement, rythme de vie...)</option>
              <option value="Oui, ma situation de couple ou ma séparation" >Oui, ma situation de couple ou ma séparation</option>
              <option value="Oui, l'arrêt ou la diminution de mon activité physique" >Oui, l'arrêt ou la diminution de mon activité physique </option>
              <option value="Oui, l'arrêt ou la reprise du tabac" >Oui, l'arrêt ou la reprise du tabac</option>
              <option value="Je consomme beaucoup d'alcool">Je consomme beaucoup d'alcool</option>
              <option value="Oui, des causes hormonales ou médicales">Oui, des causes hormonales ou médicales</option>

            </select>
        </div>
</div>


<div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled >Question 5</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question5"
            onChange={this.handleChange}
            value={this.state.question5}
            >
              <option>A votre avis,Comment imaginez-vous plutôt votre prochain régime ?</option>
              <option value="Rééquilibrage alimentaire et absence de frustration" >Rééquilibrage alimentaire et absence de frustration</option>
              <option value="Aliments interdits mais aucune restriction de quantité" >Aliments interdits mais aucune restriction de quantité</option>
              <option value="Soutien psychologique et méthode innovante" >Soutien psychologique et méthode innovante</option>
              <option value="Produits naturels et perte de poids progressive" >Produits naturels et perte de poids progressive</option>
              <option value="Simplicité d'utilisation et crédibilité scientifique">Simplicité d'utilisation et crédibilité scientifique</option>

            </select>
        </div>
</div>

<div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled > Question 6</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question6"
            onChange={this.handleChange}
            value={this.state.question6}
            >
              <option>Au-delà de la perte de vos kilos en trop, quel est votre objectif à long terme ?</option>
              <option value="Me sentir mieux dans ma peau et retrouver confiance en moi" >Me sentir mieux dans ma peau et retrouver confiance en moi</option>
              <option value="Retrouver du tonus et l'envie de bouger">Retrouver du tonus et l'envie de bouger</option>
              <option value="Retrouver mes capacités physiques">Retrouver mes capacités physiques</option>
              <option value="Plaire d'avantage">Plaire d'avantage</option>
              <option value="Prendre soin de ma santé et de mon équilibre de vie">Prendre soin de ma santé et de mon équilibre de vie</option>

            </select>
        </div>
</div>

<div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled > Question 7</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question7"
            onChange={this.handleChange}
            value={this.state.question7}
            >
              <option>Est-ce que vous êtes le plus disposé à accepter pour perdre du poids ?</option>
              <option value="Prendre le temps nécessaire pour changer mes comportements alimentaires" >Prendre le temps nécessaire pour changer mes comportements alimentaires</option>
              <option value="Apprendre des techniques de relaxation mentale et de respiration">Apprendre des techniques de relaxation mentale et de respiration</option>
              <option value="Suivre une phase d'attaque courte mais contraignante">Suivre une phase d'attaque courte mais contraignante</option>

            </select>
        </div>
</div>

<div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled > Question 8</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question8"
            onChange={this.handleChange}
            value={this.state.question8}
            >
              <option>Combien de temps avez-vous à consacrer à votre bien-être chaque jour ?</option>
              <option value="Entre 5 et 15 minutes" >Entre 5 et 15 minutes</option>
              <option value="Entre 15 minutes et 1 heure">Entre 15 minutes et 1 heure</option>
              <option value="Plus d'une heure">Plus d'une heure</option>

            </select>
        </div>
</div>


<div className='d-flex' style={{ paddingLeft :'200px'}} >

<MDBBtn floating gradient="purple" disabled > Question 9</MDBBtn>
<div style={{ paddingTop :'4px'}}>
            <select className="browser-default custom-select"
            style={{ width :'800px', height :'43px'}}
            name="question9"
            onChange={this.handleChange}
            value={this.state.question9}
            >
              <option>Par quel type de coach ou d'expert souhaitez-vous être accompagné sur internet ? </option>
              <option value="Une célébrité dans le domaine de la nutrition" >Une célébrité dans le domaine de la nutrition</option>
              <option value="Un coach qui va m'aider à vaincre mes blocages" >Un coach qui va m'aider à vaincre mes blocages</option>
              <option value="Une diététicienne ou une experte dont je puisse me sentir proche" >Une diététicienne ou une experte dont je puisse me sentir proche</option>
              <option value="Ça m'est égal !">Ça m'est égal !</option>

            </select>
        </div>
</div>
<br/>
<br/> 

{this.state.question9 ==="Une célébrité dans le domaine de la nutrition" && <Nutritionniste />}
{this.state.question9 ==="Une diététicienne ou une experte dont je puisse me sentir proche" && < Dietéticienne />}
{this.state.question9 ==="Un coach qui va m'aider à vaincre mes blocages" && <Coach/>} 



<Link to='/analyse'> 
 <div className="text-center"> 
   <MDBBtn  outline color="secondary" onClick={this.add}>Je valide mes choix ! </MDBBtn> 
   </div> 
 </Link>  
<br/>
<Footer/>
</div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    REPONSElist : state.reducerreponse,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addreponse:x=>{
      dispatch({
        type : 'ADD_REPONSE',
        newREPONSE:x
      })
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(StepperQuiz);