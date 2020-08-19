import {Mongoose} from "mongoose";

import {expect} from 'chai';
import mongoose from 'mongoose';

import User from '../src/models/mongoose/user';
import {login} from '../src/controllers/Auth/auth';

describe('Auth Controller', () => {
  before((done) => {
    mongoose.set('debug', false);
    mongoose.connect(
      'mongodb+srv://dava:dava@cluster0-7yjis.mongodb.net/forms-test?retryWrites=true&w=majority'
    )
      .then((_result: Mongoose) => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Test',
          _id: '5c0f66b979af55031b34728a'
        });
        return user.save();
      })
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
      })
  });

  it('should give a token and a message "Login success" when login', (done) => {
    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester'
      }
    };
    const res = {
      statusCode: 500,
      token: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.token = data.token;
        this.message = data.message;
      }
    };

    // @ts-ignore
    login(req, res, () => {
    })
      .then((resp) => {
        expect(resp).to.have.property('token').and.be.a('string');
        expect(resp.message).to.be.equal('Login success');
        done();
      })
  });

  it('should answer code 422 and message "Wrong Password" when login if user not exist', function (done) {
    const req = {
      body: {
        email: 'test2@test.com',
        password: '123456'
      }
    };

    const res: any = {
      statusCode: 500,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.token = data.token;
        this.message = data.message;
      }
    };

    // @ts-ignore
    login(req, res, () => {
    })
      .then(result => {
        expect(result.statusCode).to.be.equal(500);
        expect(result.message).to.be.equal('Wrong Password');
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  after(done => {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      })
  })
});
