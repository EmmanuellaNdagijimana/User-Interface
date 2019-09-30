//get all

import chai, {expect} from 'chai';

import app from './server/index';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);


describe('get all entries',() => {
    it('GET/users should get  all entries',(done) =>{
        
       
        chai .request(app)
              .get('/api/v1/db')
              . end((err,res) =>  {
                 
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  done();
              });
            });


              //get specific entry

  describe('get specific entry',() => {
  it('GET/user should get specific  entry',(done) =>{
                    
    
                         chai 
                         .request(app)
                          .get('/api/v1/db/:id')
                          . end((err,res) =>  {
                             
                             
                              expect(res.status).to.equals(+500);
                              expect(res.body).to.be.an('object');
                              expect(res.body.title).not.to.be.null;
                              expect(res.body.completed).not.to.be.null;
                              done();
                          });


    
  });
});
  //addnew entry
  
  it('POST /users should addnew user', done => {
    chai
      .request(app)
      .post('/api/v1/db/')
    
      .end((err, res) => {
        expect(res.status).to.equals(+201);
        expect(res.body).to.be.an('object'); 
      
        done();
      });
  });
});
//update existing user
it('UPDATE /users should update informations of existing user', done => {
  chai
    .request(app)
    .put('/api/v1/db/:id')
    .end((err, res) => {
      expect(res.status).to.equals(404);
      expect(res.body).to.be.an('object');
     
  
      done();
    });
});

//delete existing user
it('Delete /users should delete information', done => {
  chai
    .request(app)
    .delete('/:id')
    .end((err, res) => {
      expect(res.status).to.equals(404);
      expect(res.body).to.be.an('object');
      expect(res.body).to.be.empty;

      done();
    });
});