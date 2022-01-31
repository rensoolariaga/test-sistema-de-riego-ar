import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProject } from "../Redux/actions/actions.js";

export default function CardAdmin({
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
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteProject(id));
    alert("producto borrado con exito!");
  };

  return (
   <div>
    <div className="cardProyect">
            <button
            onClick={handlerDelete}  className="btnCancel"  >
                X
            </button>
      			<Link to = {`/admin/${id}`}>
            <button className="btnEdit"  >
             Editar
            </button>
            </Link>
            
      <h2 className="titCardGreen">{title}</h2>
      <img className="imgCard" src={image} alt="img not found" />
      <p className="parrCardType">{proyectType}</p>
      <p className="parrCard">{parragraph}</p>
      <Button className="btnModal" onClick={handleShow}>
            <p className="pBtnCardProduct">Ver más</p>
            <img className="imgNext" src="images/next.png" alt="" />
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bomba de riego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={file}
            className="ifr"
            title="This is a unique title"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
