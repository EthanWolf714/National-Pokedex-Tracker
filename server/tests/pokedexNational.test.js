const request = require('supertest');
const express = require('express');
const pokemonRoutes = require('../routes/pokedex');

const app = express();

app.use(express.json());
app.use("/api", pokemonRoutes);

describe('GET /api/pokedex', () =>  {
   it('fetches a list of all pokemon', async () => {
        const result = await request(app).get(`/api/pokedex?limit=100&offset=0`);
        expect(result.statusCode).toBe(200);
        expect(result.body.results).toBeDefined();
        expect(Array.isArray(result.body.results)).toBe(true);

   })
})