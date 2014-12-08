var Person = require('../person_model.js');
var expect = require('chai').expect;

describe("Creating a new person", function(){

  it("should have at least a name", function(done){
    p1 = new Person('John Doe');
    expect(p1.name).to.equal('John Doe');
    done();
  });

});
