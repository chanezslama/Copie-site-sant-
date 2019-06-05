import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import { MDBRow, MDBCol, MDBBtn, MDBContainer, } from 'mdbreact';


class Analyse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false
        }
    }

    spinner = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 7000);
  };


    componentDidMount=()=>{
        
        this.setState({
            ...this.props.contacts.filter(el=>el._id===this.props._id)[0]           
        }) 
    }
    render() { 

        const { loading } = this.state;

        return (       
    <div>
    <Navbar/>
    <MDBContainer className="mt-5 text-center">
    <MDBRow>
      <MDBCol>
      <div className="hoc container clear"> 
          <div className="sectiontitle">
            <p className="heading underline font-x2" style={{color :'black'}}>Merci de patienter quelques instants ...</p>
          </div> 

        <MDBBtn outline color="secondary" onClick={this.spinner} disabled={loading}>
        {loading && (
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
        )}
          {loading && <span>Analyser les résultats</span>}
          <Link to='resultattest'>
            {!loading && <span className ="deep-purple-text">Continuer</span>}
          </Link>
        </MDBBtn>
      </div>
             
      </MDBCol>
    </MDBRow>
  </MDBContainer>
    </div>  );
    }
}
 
const mapStateToProps=(state)=>{
    return{
        contacts : state.reducerlist
    }
  }
export default connect(mapStateToProps)(Analyse) ;  

