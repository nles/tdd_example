var Person = function(name,height,weight){
  this.name = name
  if(this.name == undefined) this.name = "NO NAME"
  this.height = height
  this.weight = weight
}

module.exports = Person;
