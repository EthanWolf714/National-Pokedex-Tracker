const express = require("express");
const router = express.Router();

//get fucntion for api
router.get('/pokedex', async (req, res) => {
    try {

        //fetch promise from api and await respones
        const { limit = 100, offset = 0 } = req.query;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        //if failed send error
        console.error('Error fetching pokemon: ', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;