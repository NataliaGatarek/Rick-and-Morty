import React, { useEffect, useState } from 'react';
import "./Charakters.css"
import Button from 'react-bootstrap/Button'
import { Modal } from "react-bootstrap";

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
                    <Button variant="outline-primary" onClick={handleShow}>More</Button>{' '}
                    </div>
                     <Modal Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                    keyboard={false}>
                          <Modal.Header>
                          <Modal.Title className="modal-title">{props.character.name}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="display">
                        <img className="modal-img" src={props.character.image} />
                        <strong> {props.character.species} </strong>  
                        <strong> {props.character.gender}</strong>   
                         <strong>{props.character.status}</strong>  
                          </Modal.Body>
                          <Modal.Footer className="display">
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                        </Modal>
                     
            </div>
            </div>
    );
}
export default Charakters;