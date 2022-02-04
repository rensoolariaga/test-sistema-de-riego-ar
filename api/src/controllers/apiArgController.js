const axios = require ("axios");
// const { PROVINCE } = require("../utils/constants.js")

const getLocalion = async (req, res) => {

    const PROVINCE = "https://apis.datos.gob.ar/georef/api/provincias?nombre=";

    // const MUNICIPALITYS = "https://apis.datos.gob.ar/georef/api/provincias?campos="; 

    //  const MUNICIPALITYS = "https://apis.datos.gob.ar/georef/api/municipios?provincia=22&campos=id"; 

    const { province } = req.body;
    console.log('soy el province del body: ', province)

    try{
        let locations = (await axios.get(`${PROVINCE}${province}`)).data;
        
        console.log('soy el locations antes del .data: ', locations);

        // locations = locations.data

        // console.log('soy el locations despues del .data: ', locations);

        let locationId = locations.provincias.map((p) => p.id);

        locationId = parseInt(locationId);
        
        console.log('soy el locationId: ', locationId);

        let municipality = (await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${locationId}&campos=id,nombre&max=200`)).data;

        // municipality = municipality.data;

        console.log('soy el municipality:', municipality);

        res.send('andando'); 
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = {
    getLocalion
}