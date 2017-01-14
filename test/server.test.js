/**
 * Test express API endpoints using supertest.
 */

//require supertest and the express app
const request = require('supertest');
var app = require('../server').app;
const expect = require('expect');

describe('API VI', function () {

    it('should return the user object response', function (done) {
        //send express app to supertest and chain assertions
        request(app)
            .get('/api/v1/sample')
            .expect(200)
            .expect({
                firstName: "Drew",
                lastName: 'Payette'
            })
            .expect(function (res) {
                expect(res.body).toInclude({firstName: 'Drew'})
            })
            .end(done);

    });

    it('should return a json object with a lastName property', function (done) {
        request(app)
            .get('/api/v1/sample')
            .expect('Content-Type', /json/)
            .expect(function (res) {
                expect(res.body).toNotInclude({location: 'data'})
            })
            .expect(function (res) {
                expect(res.body).toIncludeKey('lastName')
            })
            .end(done);
    });

});