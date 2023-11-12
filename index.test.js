const request = require('supertest');
const w = require('jest-autograding-reporter').weight
const {app, server} = require('./index');  // Adjust the path according to your structure

describe('Guestbook Application', () => {
    it(w(1, 'should display the main page'), async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it(w(1, 'should submit a guest entry'), async () => {
        const response = await request(app)
            .post('/')
            .type('form')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello, Guestbook!'
            });

        expect(response.statusCode).toBe(302);  // Expecting a redirection after submission
        expect(response.headers.location).toBe('/');  // Expecting redirection to the homepage
    });

    afterAll( () => {
        server.close()
    })
});

