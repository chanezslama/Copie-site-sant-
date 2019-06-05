import React, { Component } from 'react';
// import './espaceAdmin.css'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from 'react-router-dom';


class EspaceAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
  
    render() { 
        return ( 
<div>
    <SideNav>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em', color:'white' }} />
            </NavIcon>
            <NavText>
                Utilisateurs
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', color:'white'}} />
            </NavIcon>
            <NavText style={{color:'white'}}>
                Liste des Utilisateurs
            </NavText>
            
            <NavItem >
                <NavText ><Link to='/espace_admin/user_list'>
                    Patients Inscrits</Link>
                </NavText>
            </NavItem>
            
            <NavItem >
                <NavText ><Link to='/espace_admin/pharmacie_list'>
                Coordonnées Pharmacies</Link>
                </NavText>
            </NavItem>

            <NavItem >
                <NavText ><Link to='/espace_admin/IMC_list'>
                Liste IMC Calculés</Link>
                </NavText>
            </NavItem>

            <NavItem >
                <NavText ><Link to='/espace_admin/Reponse_List'>
                Liste des réponses </Link>
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon><Link to='/'>
                <i className="fa fa-fw fa-angle-double-left" style={{ fontSize: '1.75em', color:'white' }} /></Link>
            </NavIcon>
            <NavText>
                Retour
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>



        </div> 
        );
    }
}
 
export default EspaceAdmin;