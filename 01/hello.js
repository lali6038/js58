var x = 'Hello '; 
console.log(x + 'Lauren'); 
console.log(x + 'Lind'); 

var age = 65; 

if(age >=21) {
	console.log('You may legally have a drink'); }

if(age <25) {console.log(' You probably want Jageger');}
if (age >=25 && age< 60) {console.log('You want an old fashioned'); }
if (age >= 60) {console.log('You want brandy'); }

var counter = 1; 
while(counter <10) {
	console.log('Whohoo! ' + counter);

	if(counter % 3 ==0) { 
		break
	}

	counter++
}

