import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProject } from "../Redux/actions/actions.js";
import { useNavigate } from "react-router-dom";

// firebase
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./FirebaseConfig.js";

export default function CardDetailAdmin({
  title,
  image,
  parragraph,
  proyectType,
  id,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  // firebase
  const [progress, setProgress] = useState(0);
  const [upload, setUpload] = useState("");

  const [error, setError] = useState({});

  const [form, setForm] = useState({
    id: "",
    title: "",
    image: "",
    parragraph: "",
    proyectType: "",
    file: "",
  });

  function validate(form) {
    let error = {};
    if (!form.title) {
      error.title = "Se requiere un Titulo";
    } else if (!form.image) {
      error.image = "Se requiere una Imagen";
    } else if (!form.parragraph) {
      error.parragraph = "Se requiere un Parrafo";
    } else if (!form.proyectType) {
      error.proyectType = "Se requiere un Tipo de Proyecto";
    } else if (!form.file) {
      error.file = "Se requiere un PDF";
    }
    return error;
  }

  function handlerOnChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handlerSelectSeller(e) {
    setForm({
      ...form,
      proyectType: e.target.value,
    });
  }

  // cloudinary
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "gzbrg5ii");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbrbrcx3r/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const resp = await res.json();
    setPicture(resp.secure_url);
  };

  // firebase
  const uploadFile = (file) => {
    if (!file) return;
    file = file.target.files[0];
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("soy el downloadURL del uploadFile: ", downloadURL);
          setUpload(downloadURL);
        });
      }
    );
  };

  function handlerOnSubmit(e) {
    e.preventDefault();
    picture
      ? (form.image = picture)
      : console.log("soy la picture en el handerOnSubmit, estoy vacia");
    upload
      ? (form.file = upload)
      : console.log("soy el upload en el handlerOnSubmit, estoy vacio");
    id
      ? (form.id = id)
      : console.log("soy el id en el handlerOnSubmit, estoy vacio");
    dispatch(updateProject(form));
    setForm({
      id: "",
      title: "",
      image: "",
      parragraph: "",
      proyectType: "",
      file: "",
    });
    setPicture("");
    setLoading("");
    setUpload("");
    navigate("/admin");
  }

  return (
    <div className="cardDetailAdmin">
      <Link to={`/admin/${id}`}>
        <h2 className="titCardGreen">{title}</h2>
      </Link>
      <form onSubmit={handlerOnSubmit}>
        <div>
          <h1>Editar proyecto</h1>
        </div>
        <div>
          <label>Titulo</label>
        </div>
        <div>
          <input
            className="inputDetail"
            placeholder={title}
            type="text"
            name="title"
            value={form.title}
            required="required"
            onChange={handlerOnChange}
          />
          <div>{error.title ? error.title : <p></p>}</div>
        </div>
        <div>
          <label>Parrafo</label>
        </div>
        <div>
          <input
            className="inputDetail"
            placeholder="Parrafo..."
            type="text"
            name="parragraph"
            value={form.parragraph}
            onChange={handlerOnChange}
            required="required"
          />
          <div>{error.parragraph ? error.parragraph : <p></p>}</div>
        </div>
        <div>
          <label>Tipo de proyecto</label>
        </div>
        <div>
          <select
            className="inputDetail"
            name="proyectType"
            value={form.proyectType}
            onChange={handlerSelectSeller}
          >
            <option value="" disabled="disabled">
              Seleccionar
            </option>
            <option value="productivo integral">Productivo integral</option>
            <option value="sistema de riego">Sistema de riego </option>
          </select>
          <div>{error.proyectType ? error.proyectType : <p></p>}</div>
        </div>
        <div>
          <label>Subir imagen</label>
        </div>
        <div>
          <input
            className="inputDetail"
            onChange={uploadImage}
            type="file"
            name="image"
            required="required"
            accept="image/png,image/jpeg"
          />
          <div>{error.image ? error.image : <p></p>}</div>
          <div>
            {loading ? (
              <img src={picture} alt="No hay imagen" />
            ) : (
              <p>Aun no has subido una imagen</p>
            )}
          </div>
        </div>
        <div>
          <label>Subir PDF</label>
        </div>
        <div>
          <input
            className="inputDetail"
            onChange={uploadFile}
            type="file"
            name="file"
            required="required"
          />
          <div>{error.file ? error.file : <p></p>}</div>
          <h4> {progress}% subido </h4>
        </div>
        <button type="submit" className="btnS">
          <p className="parrBtn">Actualizar</p>
        </button>
      </form>
    </div>
  );
}
