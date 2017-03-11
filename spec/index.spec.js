const isDirectoryP = require('../index');
const expect = require('chai').expect;

isDirectoryP('test').then(result => console.log(result));

describe('isDirectoryPromise', () => {
  it('should return a promise', () => {
    expect(isDirectoryP('test')).to.be.a("Promise"); //.then(result => console.log(result));
  });
  it('should return false for a non-directory input', (done) => {
    isDirectoryP('test').then(result => {
      expect(result).to.be.false;
      done();
    });
  });
  it('should return true for a valid directory', (done) => {
    isDirectoryP('/.').then(result => {
      expect(result).to.be.true;
      done();
    });
  });
  it('should reject for non-string', (done) => {
    isDirectoryP([]).catch(err => expect(err).to.equal('the path argument must be a string'));
    done();
  });
});
