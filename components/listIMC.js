import React, { Component } from 'react';
import { connect } from 'react-redux';
import IMCItem from './itemIMC';
import {Link} from 'react-router-dom';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import axios from 'axios';


class IMCList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        axios.get('/get_IMC').then(res => this.props.saveIMC(res.data)).catch(err => console.log('err'))
    }

    render() {
        const {IMClist}=this.props
        console.log(this.props.IMClist) 
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
                IMClist.map((el,index)=><IMCItem  key={index} item={el}/>)
            }
            </div>

            </div>
         );
    }
}
const mapStateToProps=(state)=>{
    return{
        IMClist : state.reducerIMC
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        saveIMC:IMClist=>{
            dispatch({
                type : 'SAVE_IMC',
                IMClist,
            })
        }

        }
    }
 
export default connect(mapStateToProps,mapDispatchToProps)(IMCList);