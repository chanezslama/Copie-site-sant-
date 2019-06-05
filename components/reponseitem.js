import React, { Component } from 'react';
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBBtn } from "mdbreact";
import axios from 'axios'
import { connect } from 'react-redux';


class ReponseItem extends Component {
  delete=()=>{
    const {item}=this.props
    axios.delete(`/delete_REPONSE/${item._id}`).then(()=>this.props.delelereponse(item._id)).catch((err)=>alert('err'))

}
     

  
    render() { 
        const {item}=this.props
        return ( 
        <div className='item-container'>
                    <MDBFreeBird>
          <MDBRow>
            <MDBCol  className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>                
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 1 :</strong> {item.question1} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 2 :</strong> {item.question2} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 3 :</strong> {item.question3} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 4 :</strong> {item.question4} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 5 :</strong> {item.question5} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 6 :</strong> {item.question6} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 7 :</strong> {item.question7} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 8 :</strong> {item.question8} .
                </p>
                <p style={{fontSize :'15px'}}>
                <strong>Réponse 9 :</strong> {item.question9} .
                </p>

                <MDBBtn  outline color="secondary" onClick={this.delete}> Supprimer </MDBBtn> 

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
            
        </div> 
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    delelereponse:_id=>{
      dispatch({
        type : 'DELETE_REPONSE',
        _id,
      })
    }
  }
}


 
export default connect(null,mapDispatchToProps)(ReponseItem);