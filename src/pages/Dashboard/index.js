import React, { useEffect, useState, } from 'react';
import { Container, Row, Image, Modal } from 'react-bootstrap';
//import ScreenShot from './assets/ScreenShot.jpeg';
import api from '../../services/api';






export default function Dashboard() {
    const [pages, setPages] = useState([]);

    const [show, setShow] = useState(false);
    const [pixel, setPixel] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = function atualiza() {
        setShow(true);
        //carrega()


    } 

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

    useEffect(() => {
        async function loadPagesHeat() {
         // const user_id = localStorage.getItem('user');
         const response = await api.get('/heatmaps', {
            headers: {user_id : '5dabc21e2a39bb34d874948d'}
            //page_id: '5dac279d7d5631a6e0920258' }
        });    
        console.log(response)
    
          setPixel(response.data.docs);
          console.log()
        }
    
        loadPagesHeat();
       
    }, []);

    
    return (
        <>
        <div className="screenShotArea">
            <Container>
            <Row>
       
        {pages.map(request => (
          <div className="imageBoxArea" key={request._id}>
        <div  className="areaImage " >
        <Image onClick={handleShow} src={`https://heatmap404.herokuapp.com/files/${request.image}`} rounded />
        <Modal show={show} onHide={handleClose} animation={false}>           
            <Modal.Body >
                
                <Image  className="imageModal heatmapContainer"   src={`https://heatmap404.herokuapp.com/files/${request.image}`} />
            </Modal.Body>            
        </Modal>
        </div>{/*
        <div className="asaspps">
        <Image className="imagePop" src={`https://heatmap404.herokuapp.com/files/${request.image}`} rounded />
        </div>
        */}
        </div>        
        ))}

        </Row>
        </Container>
        </div>
        </>
    )

}