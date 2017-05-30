var Person = function(aName, age) {
	this.name = aName; 
	this.age = age
	//this.age = Math.ceil(Math.random()*1000); 
}

Person.prototype.canDrive = function(){
	if(this.age >= 16) {
		return true; 

	} else {
		return false; 
	}
}; 

var lauren= new Person("Duckling", 5); 
console.log("The person is:" , lauren.name)
console.log("The person's age is:" , lauren.age)

console.log("Can they drive?" , lauren.canDrive()); 