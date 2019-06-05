import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import ReponseItem  from './reponseitem';
import axios from 'axios';

class ReponseList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search :'',
         }
    }

    handlechange=(event)=>{
        this.setState({
            search : event.target.value
        })
    }
    componentDidMount() {
        axios.get('/get_REPONSE').then(res => this.props.savereponse(res.data))
        .catch(err => console.log('err'))
    }


    render() { 
        const {REPONSElist}=this.props
        console.log(this.props.REPONSElist)
        return ( 
        <div>
            <div className='search-container'>
            <div >
            <Link to='/espace_admin'>
            <MDBBtn outline color="secondary"  title='Retour'><MDBIcon icon="angle-double-left" size='lg'/> Retour</MDBBtn>
            </Link>
            </div>
            <MDBCol md="6">
                <MDBFormInline className="md-form">
                    <MDBIcon icon="search" />
                    <input className="form-control  ml-3 w-75" 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search"
                    value={this.state.search} 
                    onChange={this.handlechange}/>
                    
                </MDBFormInline>
            </MDBCol>
            </div>

            
            <div className='list-container'>

            {
                REPONSElist.map((el,index)=><ReponseItem key={index} item={el}/>)
            }
            </div>
        </div>
         );
    }
}
const mapStateToProps=(state)=>{
    return{
        REPONSElist : state.reducerreponse
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        savereponse:REPONSElist=>{
            dispatch({
                type : 'SAVE_REPONSE',
                REPONSElist,
            })
        }

        }
    }

 
export default connect(mapStateToProps,mapDispatchToProps)(ReponseList);