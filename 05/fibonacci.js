var sequence=[1,2]; 
var nextNumber ; 
var i =1; 

do {
    nextNumber = sequence[i] + sequence [i-1]; 
    console.log("Numer is: ", nextNumber)
    sequence.push(nextNumber); 
    i++
} while(nextNumber <4000000); 





