const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { limit = 100, offset = 0 } = req.query;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error('Error fetching pokemon: ', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;