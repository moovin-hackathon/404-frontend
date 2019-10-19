import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../index/assets/navbarindex.css';
import UserImg from '../index/assets/imgMasculino.jpeg';

class NavBarIndex extends Component {
    render(){    
        return(
            <div className="lef-menu">
                <Navbar bg="light">
                    <Navbar.Brand href="#home">
                        <img src={UserImg} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        
                        <Navbar.Brand className="userName" href="#home">André Cadoná</Navbar.Brand>
                                        
                    </Navbar.Brand>
                </Navbar>                
                <Navbar bg="dark">
                    <Navbar.Brand href="#home">Index</Navbar.Brand>
                </Navbar>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Config Api</Navbar.Brand>
                </Navbar> 
                <Navbar bg="dark">
                    <Navbar.Brand href="#home">Dados do cliente</Navbar.Brand>
                </Navbar>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Logout</Navbar.Brand>
                </Navbar>           
            </div>
        );
    }
}

export default NavBarIndex;
