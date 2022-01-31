import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import AdminProjets from "./components/AdminProjects";
import AddProject from "./components/AddProject.js";
import Services from "./components/Services.js";
import Products from "./components/Products.js";
import ShowProjects from "./components/ShowProjects.js";
import IntegralsProjects from "./components/IntegralsProjects.js";
import RegationsProjects from "./components/RegationsProjects.js";
import Us from "./components/Us.js";
import IdCard from "./components/IdCard.js";
import IdCardAdmin from "./components/IdCardAdmin.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home/>} />

          <Route exact path="/servicios" element={<Services/>} />

          <Route exact path="/productos" element={<Products/>} />

          <Route exact path="/proyectos" element={<ShowProjects/>} />

          <Route exact path="/iniciarsesion" element={<Login/>} />

          <Route exact path="/admin" element={<AdminProjets/>} />

          <Route  exact path="/crearproyecto" element={<AddProject/>} />

          <Route  exact path="/sistemasderiego" element={<RegationsProjects/>} />

          <Route  exact path="/productivosintegrales" element={<IntegralsProjects/>} />

          <Route  exact path="/nosotros" element={<Us/>} />

          <Route  path="/admin/:id" element={<IdCardAdmin/>} />

          <Route path="/proyectos/:id" element={<IdCard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
