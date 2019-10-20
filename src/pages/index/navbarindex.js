import React, { Component } from 'react';
import { Nav, Image, Container, Row, Col  } from 'react-bootstrap';
import '../index/assets/index.css';
import UserImg from '../index/assets/imgMasculino2.jpeg';
import api from '../../services/api';

class NavBarIndex extends Component {
    render(){
        async function handleClick(event) { 
            const response = await api.get('/pages');
            console.log(response.data);
        }
        return(
            <header className="geral">
                <div className="menuTop">
                    <Nav className="navMenu" activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link className="navMenuLink" href="#home">Index</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navMenuLink" eventKey="link-1">Conf. Api</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className="navMenuLink" eventKey="link-2">Conf. User</Nav.Link>
                        </Nav.Item>                                            
                    </Nav>
                    <Container>
                        <Row>                              
                            <Col className="boxImg" xs={3} md={3}>
                                <Image src={ UserImg } width="50" heigth="50" roundedCircle />                                
                            </Col>
                            <div className="userName">
                                <Nav.Link className="navMenuLink"eventKey="link-2">André Cadoná</Nav.Link>                                
                            </div>                          
                        </Row>
                    </Container>                                         
                </div>               
            </header>    
        );
    }
}

export default NavBarIndex;
