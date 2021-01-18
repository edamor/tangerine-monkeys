
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server.js')

// Configure chai
chai.use(chaiHttp);
chai.should();


describe("Get suggested County/Counties", () => {
    describe("GET", () => {
        
        it("should get 4 results starting with query string", (done) => {
             const query = "al";
             chai.request(app)
                 .get(`/api/suggest?q=${query}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });
         
    });
});
