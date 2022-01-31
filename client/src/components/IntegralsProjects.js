import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getAllProjects } from "../Redux/actions/actions.js";
import { Spinner } from "react-bootstrap";
import Footer from "./Footer.js";
import Pagination from "./Pagination.js";
import NavBar from "./NavBar.js";
import RenderingUser from "./RenderingUser.js";

export default function IntegralsProjects() {
  const dispatch = useDispatch();

  const allProjects = useSelector((state) => state.allProjects);

  useEffect(() => {
    dispatch(getAllProjects());
    return () => {
      dispatch(getAllProjects());
    };
  }, [dispatch]);

  const filterProjects = allProjects?.filter(
    (project) => project.proyectType === "productivo integral"
  );

  // ¡¡¡¡¡¡¡ PAGINADO, ORDEN Y FILTROS !!!!!!!!

  const [amountOfProjects] = useState(12);

  const [paged, setPaged] = useState(1);

  const numberOfPage = (number) => {
    setPaged(number);
  };

  const lastIndex = paged * amountOfProjects;

  const firstIndex = lastIndex - amountOfProjects;

  const pageProjects = filterProjects?.slice(firstIndex, lastIndex);

  return (
    <div className="divTop">
      <div>
        <NavBar />
      </div>
      ;<h2 className="title2">INTEGRALES</h2>
      <hr className="linet" />
      <div className="wrapper">
        {filterProjects?.length === 0 ? (
          <div>
            <Spinner animation="border" className="spinner" variant="success" />
          </div>
        ) : (
          <div className="columnDiv">
            <RenderingUser pageProjects={pageProjects} />
          </div>
        )}
      </div>
      <div>
        <Pagination
          amountOfProjects={amountOfProjects}
          numberOfProjects={filterProjects.length}
          numberOfPage={numberOfPage}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
