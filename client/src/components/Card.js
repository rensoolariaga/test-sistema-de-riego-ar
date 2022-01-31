import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Card({
  title,
  image,
  parragraph,
  proyectType,
  id,
  file,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src={file}
          className="ifr"
          title="This is a unique title"
        />
      </Modal.Body>
    </Modal>
    <div className="cardProyect">      
      <img className="imgCard" src={image} alt="img not found" />
      <h2 className="titCardGreen">{title}</h2>
      <p className="parrCard">{parragraph}</p>
      <Button className="btnModal" onClick={handleShow}>
          <p className="pBtnCard">Ver más</p>
          <img className="imgNext" src="images/next.png" alt="" />
      </Button>
    </div>
  </div>
  );
}
