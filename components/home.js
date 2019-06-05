import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import HomeContent from './homecontent'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
    {/* <Navbar/> */}
    <HomeContent/>
    <Footer/>

                
            </div>
         );
    }
}
 
export default Home;