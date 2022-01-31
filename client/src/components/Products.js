import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import React, { useState } from "react";
import { Button, Modal, Carousel, Dropdown, ButtonGroup } from "react-bootstrap";

export default function Productos() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);

  const [show4, setShow4] = useState(false);
  const handleShow4 = () => setShow4(true);
  const handleClose4 = () => setShow4(false);

  const [show5, setShow5] = useState(false);
  const handleShow5 = () => setShow5(true);
  const handleClose5 = () => setShow5(false);

  const [show6, setShow6] = useState(false);
  const handleShow6 = () => setShow6(true);
  const handleClose6 = () => setShow6(false);

  const [show7, setShow7] = useState(false);
  const handleShow7 = () => setShow7(true);
  const handleClose7 = () => setShow7(false);

  const [show8, setShow8] = useState(false);
  const handleShow8 = () => setShow8(true);
  const handleClose8 = () => setShow8(false);

  const [show9, setShow9] = useState(false);
  const handleShow9 = () => setShow9(true);
  const handleClose9 = () => setShow9(false);

  const [show10, setShow10] = useState(false);
  const handleShow10 = () => setShow10(true);
  const handleClose10 = () => setShow10(false);
  const [show11, setShow11] = useState(false);
  const handleShow11 = () => setShow11(true);
  const handleClose11 = () => setShow11(false);
  const [show12, setShow12] = useState(false);
  const handleShow12 = () => setShow12(true);
  const handleClose12 = () => setShow12(false);
  const [show13, setShow13] = useState(false);
  const handleShow13 = () => setShow13(true);
  const handleClose13 = () => setShow13(false);
  const [show14, setShow14] = useState(false);
  const handleShow14 = () => setShow14(true);
  const handleClose14 = () => setShow14(false);

  const [show15, setShow15] = useState(false);
  const handleShow15 = () => setShow15(true);
  const handleClose15 = () => setShow15(false);
  const [show16, setShow16] = useState(false);
  const handleShow16 = () => setShow16(true);
  const handleClose16 = () => setShow16(false);
  const [show17, setShow17] = useState(false);
  const handleShow17 = () => setShow17(true);
  const handleClose17 = () => setShow17(false);
  const [show18, setShow18] = useState(false);
  const handleShow18 = () => setShow18(true);
  const handleClose18 = () => setShow18(false);
  const [show19, setShow19] = useState(false);
  const handleShow19 = () => setShow19(true);
  const handleClose19 = () => setShow19(false);
  const [show20, setShow20] = useState(false);
  const handleShow20 = () => setShow20(true);
  const handleClose20 = () => setShow20(false);
  const [show21, setShow21] = useState(false);
  const handleShow21 = () => setShow21(true);
  const handleClose21 = () => setShow21(false);
  const [show22, setShow22] = useState(false);
  const handleShow22 = () => setShow22(true);
  const handleClose22 = () => setShow22(false);
  const [show23, setShow23] = useState(false);
  const handleShow23 = () => setShow23(true);
  const handleClose23 = () => setShow23(false);
  const [show24, setShow24] = useState(false);
  const handleShow24 = () => setShow24(true);
  const handleClose24 = () => setShow24(false);

  return (
    <div>
      <NavBar />
      <div className="divTop">
        <h2 className="title2">PRODUCTOS</h2>
        <hr className="linet" />
        <Carousel className="carouselCont">
          <Carousel.Item>
            <div className="divFlexProd">
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Aspersores</h4>
                  <p className="parrCard">

                  </p>
                  <Button className="divFlexs bnBlue" onClick={handleShow}>
                    <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                    <img className="imgNext" src="images/nextGreen.png" alt="" />
                  </Button >
                </div>
              </div>
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Bombas</h4>
                  <p className="parrCard">

                  </p>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleShow2}>Rotor pump - Centrífugas horizontales a eje libre</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow23}>Rotor Pump - Centrífugas horizontales</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow24}>WILO - SPU4 - Sumergibles 4</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Caudillimetros</h4>
                  <p className="parrCard">

                  </p>
                  <Button className="divFlexs bnBlue" onClick={handleShow3}>
                    <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                    <img className="imgNext" src="images/nextGreen.png" alt="" />
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="divFlexProd">
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Conectores</h4>
                  <p className="parrCard">

                  </p>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleShow4}>2016- Connector- quick selection guide</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow20}>Catálogo de conectores y accesorios ENE2021 (1)</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow21}>KC_Jul2019_Global connectors catalog</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow22}>Image</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Filtros</h4>
                  <p className="parrCard">

                  </p>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleShow5}>AMIAD -Semi-Automatic Filters Spanish - Filtros de malla</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow16}>Filtros grava Yamit</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow17}>SandSstorm - Filtros de grava</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow18}>Sandstorm_double_chamber - Filtros de grava</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow19}>Screen Guard - Filtros de malla</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Laterales de Goteo</h4>
                  <p className="parrCard">

                  </p>
                  <Button className="divFlexs bnBlue" onClick={handleShow6}>
                    <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                    <img className="imgNext" src="images/nextGreen.png" alt="" />
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="divFlexProd">
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Programadores</h4>
                  <p className="parrCard">

                  </p>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleShow7}>Catálogo de tuberias flexibles ENE21</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow14}>NMC Junior Pro</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow15}>NMC PRO CONTROLLER</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Tuberias Flexibles</h4>
                  <p className="parrCard">

                  </p>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleShow8}>Catálogo de tuberias flexibles ENE21</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow11}>MANUAL CONECTORES ROSCADOS FLEXNET</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow12}>MANUAL DE MANEJO Y RECOLECCIÓN FLEXNET</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow13}>MANUAL NETAFIX</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="cardProduct">
                <img className="imgCardProduct" src="images/maiz.jpg" alt="" />
                <div className="boxCardProd">
                  <h4 className="titCardBlueProduct">Válvulas</h4>
                  <p className="parrCard">

                  </p>
                  <Dropdown as={ButtonGroup}>
                    <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleShow9}>Full valves catalog</Dropdown.Item>
                      <Dropdown.Item onClick={handleShow10}>Netafim Air Valves- Brochure</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>


        <div className="containerProducts" >

          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Aspersores</h4>
                <Button className="divFlexs bnBlue" onClick={handleShow}>
                  <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button >
              </div>
            </div>
          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Bombas</h4>
                <p className="parrCard">

                </p>
                <Button className="divFlexs bnBlue" onClick={handleShow2}>
                  <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
              </div>
            </div>

          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Caudillimetros</h4>
                <p className="parrCard">

                </p>
                <Button className="divFlexs bnBlue" onClick={handleShow3}>
                  <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
              </div>
            </div>

          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Conectores</h4>
                <p className="parrCard">

                </p>
                <Dropdown as={ButtonGroup}>
                  <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow4}>2016- Connector- quick selection guide</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow20}>Catálogo de conectores y accesorios ENE2021 (1)</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow21}>KC_Jul2019_Global connectors catalog</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow22}>Image</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Filtros</h4>
                <p className="parrCard">

                </p>
                <Dropdown as={ButtonGroup}>
                  <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow5}>AMIAD -Semi-Automatic Filters Spanish - Filtros de malla</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow16}>Filtros grava Yamit</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow17}>SandSstorm - Filtros de grava</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow18}>Sandstorm_double_chamber - Filtros de grava</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow19}>Screen Guard - Filtros de malla</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Laterales de Goteo</h4>
                <p className="parrCard">

                </p>
                <Button className="divFlexs bnBlue" onClick={handleShow6}>
                  <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
              </div>
            </div>

          </div>

          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Programadores</h4>
                <p className="parrCard">

                </p>
                <Dropdown as={ButtonGroup}>
                  <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow7}>Catálogo de tuberias flexibles ENE21</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow14}>NMC Junior Pro</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow15}>NMC PRO CONTROLLER</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProd">
                <h4 className="titCardBlueProduct">Tuberias Flexibles</h4>
                <p className="parrCard">

                </p>
                <Dropdown as={ButtonGroup}>
                  <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow8}>Catálogo de tuberias flexibles ENE21</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow11}>MANUAL CONECTORES ROSCADOS FLEXNET</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow12}>MANUAL DE MANEJO Y RECOLECCIÓN FLEXNET</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow13}>MANUAL NETAFIX</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="cardProductMobile">
            <div className="divFlexs">
              <img className="imgCardProductMobile" src="images/maiz.jpg" alt="" />
              <div className="boxCardProdMobile">
                <h4 className="titCardBlueProduct">Válvulas</h4>
                <p className="parrCard">

                </p>
                <Dropdown as={ButtonGroup}>
                  <Button className="bkButton"><p className="pBtnCardProjects vrGreen">VER MÁS</p></Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="bkButton" />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow9}>Full valves catalog</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow10}>Netafim Air Valves- Brochure</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
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
            <Modal.Title>Aspersores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Aspersores/Aspersores, microaspersores y emisores.pdf"
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
            <Modal.Title>Bombas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Bombas/Rotor pump - Centrífugas horizontales a eje libre.pdf"
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
            <Modal.Title>Caudillimetros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Caudilimetros/WaterMeters.pdf"
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
            <Modal.Title>Conectores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Conectores/KC_Jul2019_Global connectors catalog.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show5}
          onHide={handleClose5}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filtros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Filtros/Filtros grava Yamit.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show6}
          onHide={handleClose6}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Laterales por Goteo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Laterales de Goteo/catalogoLaterales.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show7}
          onHide={handleClose7}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Programadores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Programadores/NMC PRO CONTROLLER.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show8}
          onHide={handleClose8}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tuberias Flexibles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Tuberias Flexibles/Catálogo de tuberias flexibles ENE21.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show9}
          onHide={handleClose9}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Válvulas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Valvulas/Full valves catalog.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show10}
          onHide={handleClose10}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Válvulas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Valvulas/Netafim Air Valves- Brochure.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>


        <Modal
          show={show11}
          onHide={handleClose11}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tuberias Flexibles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Tuberias Flexibles/MANUAL CONECTORES ROSCADOS FLEXNET.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show12}
          onHide={handleClose12}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tuberias Flexibles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Tuberias Flexibles/MANUAL DE MANEJO Y RECOLECCIÓN FLEXNET.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show13}
          onHide={handleClose13}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tuberias Flexibles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Tuberias Flexibles/MANUAL NETAFIX.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show14}
          onHide={handleClose14}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Programadores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Programadores/NMC Junior Pro.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show15}
          onHide={handleClose15}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Programadores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Programadores/NMC PRO CONTROLLER.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show16}
          onHide={handleClose16}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filtros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Filtros/Filtros grava Yamit.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show17}
          onHide={handleClose17}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filtros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Filtros/SandSstorm - Filtros de grava.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show18}
          onHide={handleClose18}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filtros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Filtros/Sandstorm_double_chamber - Filtros de grava.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>
        <Modal
          show={show19}
          onHide={handleClose19}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filtros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Filtros/Screen Guard - Filtros de malla.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show20}
          onHide={handleClose20}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Conectores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Conectores/Catálogo de conectores y accesorios ENE2021 (1).pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show21}
          onHide={handleClose21}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Conectores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Conectores/KC_Jul2019_Global connectors catalog.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show22}
          onHide={handleClose22}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Conectores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src="ProductosPDF/Conectores/WhatsApp Image 2020-05-15 at 14.57.54.jpeg"
              className="ifr"
              alt="no image"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show23}
          onHide={handleClose23}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bombas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Bombas/Rotor Pump - Centrífugas horizontales.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={show24}
          onHide={handleClose24}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bombas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="ProductosPDF/Bombas/WILO - SPU4 - Sumergibles 4.pdf"
              className="ifr"
              title="This is a unique title"
            />
          </Modal.Body>
        </Modal>

        <Footer />
      </div>
    </div>
  );
}
