import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './home';
import Presentation from './presentation';
import Users from './user';
import Nutrition from './nutrition';
import Mamanbebe from './mamanbebe';
import Beaute from './beaute';
import EspaceAdmin from './espaceAdmin';
import ContactList from './contactList';
import Pharmacie from './pharmacie';
import EditContact from './editcontact';
import ListPharmacie from './listpharmacie';
import Minceur from './minceur';
import IMC from './IMC';
import StepperQuiz from './stepperQuiz';
import Identification from './identification';
import ResultatTest from './resultatTest';
import IMCList from './listIMC';
import ReponseList from './reponselist';
import ProfilPatient from './profilpatient';
import EditProfil from './edituserProfil'; 
import Editpharmacie from './editpharmacie';
import Analyse from './analyse'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <div>
                
                <Route exact path='/' render={()=><Home/>}/>
                <Route exact path='/pharmacie' render={()=><Pharmacie/>}/>
                <Route exact path='/About_us' render={()=><Presentation/>}/>
                <Route exact path='/contact_patient' render={()=><Users/>}/>
                <Route exact path='/nutrition' render={()=><Nutrition/>}/>
                <Route exact path='/maman_bebe' render={()=><Mamanbebe/>}/> 
                <Route exact path='/beaute' render={()=><Beaute/>}/>
                <Route exact path='/espace_admin' render={()=><EspaceAdmin/>}/>
                <Route exact path='/espace_admin/user_list' render={()=><ContactList/>}/>
                <Route exact path='/espace_admin/pharmacie_list' render={()=><ListPharmacie/>}/>
                <Route exact path='/editpharmacie/:_id' render={(props)=>< Editpharmacie _id={props.match.params._id}/>}/>
                <Route exact path='/minceur' render={()=><Minceur/>}/>
                <Route exact path='/calcul_IMC' render={()=><IMC/>}/>
                <Route exact path='/espace_admin/IMC_list' render={()=><IMCList/>}/>
                <Route exact path='/espace_admin/Reponse_List' render={()=><ReponseList/>}/>
                
                <Route exact path='/stepperquiz' render={()=><StepperQuiz />}/>
                <Route exact path='/identification' render={()=><Identification/>}/>
                <Route exact path='/profil_patient/:_id' render={(props)=><ProfilPatient _id={props.match.params._id}/>}/>
                <Route exact path='/edit_user_profil/:_id' render={(props)=> <EditProfil _id={props.match.params._id}/>}/>
                <Route exact path='/resultattest' render={()=><ResultatTest />}/>
                <Route exact path='/analyse' render={()=><Analyse />}/>

                <Route exact path='/editContact/:_id' render={(props)=>< EditContact _id={props.match.params._id}/>}/>
                
                
            </div>
          );
    }
}
 
export default Routes;