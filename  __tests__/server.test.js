'use strict'

const supertest = require('supertest')

const { app } = require('../src/server')

const req = supertest(app)

describe('Test the Error Handlers', () => {
    it('Bad Route 404', async () => {
        const res = await req.get('/notfound');
        expect(res.status).toEqual(404);
    })

    it('Bad Method 404', async () => {
        const res = await req.post('/person/name');
        expect(res.status).toEqual(404);
    })

    it(' if the name is in the query string', async () => {
        const res = await req.get('/person/name');
        expect(res.status).toEqual(200);
    })

    it('test the query if string', async () => {
        const res = await req.get('/person/abdullah')
        expect(res.body).toEqual({"name": "abdullah"});
    })

    it('test the query if number', async () => {
        const res = await req.get('/person/10')
        expect(res.status).toBe(500);
    })
})