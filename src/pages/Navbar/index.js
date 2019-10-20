import React, { useEffect, useState, } from 'react';
import { Nav, Image, Container, Row, Col  } from 'react-bootstrap';
import './assets/index.css';
import UserImg from './assets/imgMasculino2.jpeg';
import api from '../../services/api';

    
export default function Navbar() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        async function loadUser() {
         // const user_id = localStorage.getItem('user');
         const response = await api.get('/user/teste@mail.com');    
        console.log(response)
    
            setUser(response.data);
        }

        loadUser();       
    }, []);
   
    return (
        <>
            <header className="geral">
                <div className="menuTop">
                    <Nav className="navMenu" activeKey="/home" >                   
                   
                        <Nav.Item>
                        
                        <Nav.Link className="navMenuLink" href="/dashboard">DASHBOARD</Nav.Link>
                      
                        </Nav.Item>
                       
                        
                        <Nav.Item>
                       
                            <Nav.Link className="navMenuLink" href="/config">CONFIGURAÇÕES</Nav.Link>
                            
                        </Nav.Item>
                       
                                                                  
                    </Nav>
                    <Container>
                        <Row>                              
                            <Col className="boxImg" xs={3} md={3}>
                                <Image src={ UserImg } width="50" heigth="50" roundedCircle />                                
                            </Col>
                            <div className="userName">
                                <Nav.Link className="navMenuLink"eventKey="link-2">{user.name}</Nav.Link>                                
                            </div>                          
                        </Row>
                    </Container>                                         
                </div>               
            </header>   
        </> 
    );
}



