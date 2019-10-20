import React, { Component } from 'react';
import { Card, Container, Row, Image } from 'react-bootstrap';
import ScreenShot from './assets/ScreenShot.jpeg';
import api from '../../services/api';

class ScrimShotArea extends Component{
    render(){ 
        async function handleClick() {
            const response = await api.get('/pages', {
                headers: {user_id : '5dabc21e2a39bb34d874948d'}
            });    
           console.log(response.data.docs[0].image);
        };
        return(
            <>
                <Card className="cardQtd" bg="light" style={{ width: '18rem' }}>
                    <Card.Header className="cardTitulo">Quantidade de Acessos</Card.Header>
                    <Card.Body className="cardBody">       
                        <Card.Text>                           
                            20000 Acessos
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="screenShotArea">
                    <Container>
                        <span className="prev"></span>
                        <Row>
                            <div className="areaImage" onClick={handleClick}>
                                <Image src={ScreenShot} rounded />
                            </div>
                            <div className="areaImage">
                                <Image src={ScreenShot} rounded />
                            </div> 
                            <div className="areaImage">
                                <Image src={ScreenShot} rounded />
                            </div> 
                            <div className="areaImage">
                                <Image src={ScreenShot} rounded />
                            </div>
                            <div className="areaImage">
                                <Image src={ScreenShot} rounded />
                            </div>
                            <div className="areaImage">
                                <Image src={ScreenShot} rounded />
                            </div> 
                            <div className="areaImage">
                                <Image src={ScreenShot} rounded />
                            </div>                                                                                                                                                                                      
                        </Row>
                        <span className="next"></span>
                    </Container>
                </div>                
            </>
        );
    }
}

export default ScrimShotArea;