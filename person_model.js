var Person = function(name,height,weight){
  this.name = name
  if(this.name == undefined) this.name = "NO NAME"
  this.height = height
  this.weight = weight
}

Person.prototype.calculateBMI = function(){
  var heightInMeters = this.height/100
  var bmi = this.weight / (heightInMeters * heightInMeters);
  // round to two decimal places
  this.bmi = Math.round(bmi * 100) / 100
  return this.bmi;
}

module.exports = Person;
