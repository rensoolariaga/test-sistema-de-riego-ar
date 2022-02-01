import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMail } from "../Redux/actions/actions.js";

export default function Footer() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    consult: "",
    province: "",
    municipality: ""
  });

  const [error, setError] = useState({});

  function validate(input) {
    let error = {};
    if (!input.email) {
      error.email = "Se requiere un Email";
    } else if (!input.consult) {
      error.consult = "Se requiere una Consulta";
    }
    return error;
  }

  const handlerOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerSelectProvince = (e) => {
    setInput({
      ...input,
      province: e.target.value
    })
  }

  const handlerOnSubmit = (e) => {
    console.log('soy el input del handlerOnSubmit: ', input)
    e.preventDefault();
    dispatch(sendMail(input));
    setInput({
      email: "",
      consult: "",
      province: "",
      municipality: ""  
    });
    alert("Gracias por su consulta!");
  };

  return (
    <div>
      <div className="footer" id="contacto">
        <div className="contactContainer">
          <h4 className="titFoo">CONTACTO</h4>
          <p className="parrFoo">asistencia_riego@gmail.com</p>
          <p className="parrFoo">Av Hirigoyen 16794</p>
          <div className="divFlexsIcons">
            <img className="imgIcon" src="images/email.png" alt="" />
            <img className="imgIcon" src="images/facebook.png" alt="" />
            <img className="imgIcon" src="images/instagram.png" alt="" />
            <img className="imgIcon" src="images/whatsapp.png" alt="" />
          </div>
        </div>
        <div>
          <form onSubmit={handlerOnSubmit} className="divForm">
            <div className="mb-6 xs-12">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email..."
                value={input.email}
                onChange={handlerOnChange}
              />
              <div>{error.email ? error.email : <p></p>}</div>
            </div>
            <div>
              <label>Provincia:</label>
              <select name="province" value={input.province} onChange={handlerSelectProvince}>
                <option value="" selected></option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucumán">Tucumán</option>
                <option value="CABA">CABA</option>
              </select>
            </div>
            <div className="mb-6 xs-12">
              <textarea
                placeholder="Consulta..."
                type="text"
                name="consult"
                className="form-control"
                value={input.consult}
                onChange={handlerOnChange}
              />
              <div>{error.consult ? error.consult : <p></p>}</div>
            </div>
            <button className="btnFoo" type="submit">
              <p className="parrBtnFoo">ENVIAR</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
