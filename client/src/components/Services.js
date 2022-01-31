import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { getAllProjects } from "../Redux/actions/actions.js";

import Footer from "./Footer.js";
import NavBar from "./NavBar.js";

export default function Services() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className="divServicios">
        <h2 className="title2">SERVICIOS</h2>
        <hr className="linet" />

        <div className="divFlexServ">
          <div className="cardServ" onClick={handleShow}>
            <img className="imgCardServ" src="images/regado.jpeg" alt="" />
            <div className="boxCardServ">
              <h4 className="titCardBlue">Instalacion</h4>
              <p className="parrCard">
                Instalamos equipos de riego por goteo superficial y enterrado.
              </p>
              <Button className="btnCardServ bnBlue" onClick={handleShow}>
                <p className="pBtnCardProjects vrBlue">VER MÁS</p>
                <img className="imgNext" src="images/nextGreen.png" alt="" />
              </Button>

            </div>
          </div>
          <div className="cardServ" onClick={handleShow2}>
            <img className="imgCardServ" src="images/auditor2.jpeg" alt="" />
            <div className="boxCardServ">
              <h4 className="titCardBlue">Auditorías</h4>
              <p className="parrCard">
                Auditorías sobre equipos de riego en funcionamiento, diagnóstico y rediseño.
              </p>
              <Button className="divFlexs bnBlue" onClick={handleShow2}>
                <p className="pBtnCardProjects vrBlue">VER MÁS</p>
                <img className="imgNext" src="images/nextGreen.png" alt="" />
              </Button>
            </div>
          </div>
          <div className="cardServ" onClick={handleShow3}>
            <img className="imgCardServ" src="images/drones-agricultura.jpeg" alt="" />
            <div className="boxCardServ">
              <h4 className="titCardBlue">Diagnóstico</h4>
              <p className="parrCard">
                Diagnóstico técnico y potencialidades productivas para toma de decisión frente a la compra
                de capital Tierra.
              </p>
              <Button className="divFlexs bnBlue" onClick={handleShow3}>
                <p className="pBtnCardProjects vrBlue">VER MÁS</p>
                <img className="imgNext" src="images/nextGreen.png" alt="" />
              </Button>
            </div>
          </div>
          <div className="cardServ" onClick={handleShow4}>
            <img className="imgCardServ" src="images/maiz.jpg" alt="" />
            <div className="boxCardServ">
              <h4 className="titCardBlue">Servicio de siembra </h4>
              <p className="parrCard">
                Servicio de siembra directa de zapallo, maíz dulce, leguminosas, entre otras.
              </p>
              <Button className="divFlexs bnBlue" onClick={handleShow4}>
                <p className="pBtnCardProjects vrBlue">VER MÁS</p>
                <img className="imgNext" src="images/nextGreen.png" alt="" />
              </Button>
            </div>
          </div>
        </div>



        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Instalacion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/78NW2yxg5UZMM3"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Auditorías</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/78NW2yxg5UZMM3"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show3}
          onHide={handleClose3}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Diagnóstico</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/78NW2yxg5UZMM3"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show4}
          onHide={handleClose4}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Servicio de siembra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/78NW2yxg5UZMM3"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
