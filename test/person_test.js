var Person = require('../person_model.js');
var expect = require('chai').expect;

describe("Creating a new person", function(){

  it("should have at least a name", function(done){
    p1 = new Person('John Doe');
    expect(p1.name).to.equal('John Doe');
    p2 = new Person();
    expect(p2.name).not.to.be.an('undefined');
    done();
  });

  it("should calculate BMI correctly", function(done){
    p1 = new Person('Bob', 190, 70);
    p1.calculateBMI();
    expect(p1.bmi).to.equal(100);
    done();
  });

});
