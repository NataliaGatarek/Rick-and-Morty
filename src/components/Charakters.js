import React, { useEffect, useState } from 'react';
import "./Charakters.css"
import Button from 'react-bootstrap/Button'
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Charakters(props) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
    const handleClose = () => setShow(false);

    return (
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className= "flip-card-front">
                <img src={props.character.image}/>
            </div>
            <div className="flip-card-back display">
                    <strong>{props.character.name}</strong>
                    <Button variant="outline-danger" onClick={handleShow}>More</Button>{' '}
                    </div>
                     <Modal Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                    keyboard={false}
                >
                          <Modal.Header className="disp">
                          <Modal.Title><strong>{props.character.name}</strong></Modal.Title>
                          </Modal.Header>
                    <Modal.Body className="displaying" >
                        <div className="display">
                        <img src={props.character.image} />
                        <strong> {props.character.species} </strong>  
                        <strong> {props.character.gender} </strong>   
                        <strong> {props.character.status} </strong>
                        </div>
                          </Modal.Body>
                          <Modal.Footer className="disp">
                          <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                        </Modal>
                     
            </div>
            </div>
    );
}
export default Charakters;