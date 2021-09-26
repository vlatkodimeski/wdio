const request = require("supertest");
const expect = require('chai').expect;

let baseURL = "https://reqres.in/api";

const payloadS = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
const payloadN = {
    "email": "eve.holt@reqres.in"
}
let listUsers = "/users?page=1";

describe('API', () => {
    it('POSTOK', async () => {
        const response = await request(baseURL)
            .post("/register")
            .send(payloadS)
            .set('Content-Type', 'application/json')

        await (expect(response.status).to.equal(200));
        console.log(response.body)
    });

    it('POSTNOK', async () => {
        const response = await request(baseURL)
            .post("/register")
            .send(payloadN)
            .set('Content-Type', 'application/json')

        await (expect(response.status).to.equal(400));
        console.log(response.body)
    });
    it('GET', async () => {
        const response = await request(baseURL)
            .get(listUsers);
        await (expect(response.status).to.equal(200));
        console.log(response.body);
    });



});