import React, { useEffect, useState, } from 'react';
import { Container, Row, Image } from 'react-bootstrap';
//import ScreenShot from './assets/ScreenShot.jpeg';
import api from '../../services/api';



export default function Dashboard() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        async function loadPages() {
         // const user_id = localStorage.getItem('user');
         const response = await api.get('/pages', {
            headers: {user_id : '5dabc21e2a39bb34d874948d'}
        });    
        console.log(response)
    
          setPages(response.data.docs);
        }
    
        loadPages();
       
    }, []);
    
    return (
        <>
        <div className="screenShotArea">
            <Container>
            <Row>
       
        {pages.map(request => (
          <div key={request._id}>
        <div  className="areaImage" >
        <Image src={request.image} rounded />
        </div>
        <div className="asaspps">
        <Image className="imagePop" src={request.image} rounded />
        </div>
        
        </div>        
        ))}

        </Row>
        </Container>
        </div>
        </>
    )

}