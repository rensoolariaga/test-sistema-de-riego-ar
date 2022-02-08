const axios = require("axios");
// const { PROVINCE } = require("../utils/constants.js")

const getLocalion = async (req, res) => {
  // const PROVINCE = "https://apis.datos.gob.ar/georef/api/provincias?nombre=";

  const { province } = req.query;
  console.log("soy el province del body: ", province);

  try {
    let locations = (await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${province}`)).data;

    let locationId = locations.provincias.map((p) => p.id);

    locationId = parseInt(locationId);

    let infoMunicipalitys = (
      await axios.get(
        `https://apis.datos.gob.ar/georef/api/municipios?provincia=${locationId}&campos=id,nombre&max=200`
      )
    ).data;

    let municipalitys = infoMunicipalitys.municipios.map((m) => m);

    municipalitys
      ? res.send(municipalitys)
      : res.send("error finding municipalitys");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getLocalion,
};
