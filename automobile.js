/* Author: Kim McLeod
   Date: 10.25.15
   Description: Sort an array of automobiles based on year (descending), make (ascending), and type.
*/

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
    Automobile.prototype.logMe = function(bool){
        if(bool){
            console.log(this.year + ' ' + this.make + ' ' + this.model+ ' ' + this.type)
        }else{
            console.log(this.year + ' ' + this.make + ' ' + this.model)
        }
    }
            
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    /*your code here*/
    // use the built-in sort function with the comparator
    array.sort(comparator);
    var arrCopy = []; 
    // create the new array
	for (var i = 0, len = array.length; i < len; i++) {
    	arrCopy[i] = new Automobile(array[i].year, array[i].make, array[i].model, array[i].type)
}
    return arrCopy;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){

    if (auto1.year > auto2.year){
        return false;
    }else if(auto1.year < auto2.year){
        return true;
    }else{
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){

    if(auto1.make.toUpperCase() > auto2.make.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
var car1 = auto1.type.toUpperCase();
var car2 = auto2.type.toUpperCase();
    if(car1 === "ROADSTER"){ 
        if(car2 === "ROADSTER"){ 
        	return yearComparator(auto1, auto2);
        }else{
            return false;
        }
        
    }
    else if(car1 === "PICKUP"){ 
		if(car2 === "ROADSTER"){ 
            return true;
         }
         else if(car2 === "PICKUP"){ 
             return yearComparator( auto1, auto2);
        }else{
            return false;
        }
    }
        
    else if(car1 === "SUV"){ 
		if(car2 === "ROADSTER" || car2 === "PICKUP"){ 
            return true;
         }
         else if(car2 === "SUV"){ 
             return yearComparator( auto1, auto2);
        }else{
            return false;
        }
    }
       
     else if(car1 === "WAGON"){ 
		if(car2 === "ROADSTER" || car2 === "PICKUP" || car2 === "SUV"){ 
            return true;
         }
         else if(car2 === "WAGON"){ 
             return yearComparator( auto1, auto2);
        }else{
            return false;
        }
     } 
		
     else{
		if(car2 === "ROADSTER" || car2 === "PICKUP" || car2 === "SUV" || car2 === "WAGON"){ 
            return true;
         }
         else if(car1 === car2){ 
             return yearComparator( auto1, auto2);
         }

       
	}
}
 
         
      
console.log("*****");

// sort and print cars by year
console.log("The cars sorted by year are:");
sortArr(yearComparator, automobiles).forEach(function (car) {car.logMe(false)});
console.log(" ");

      
// sort and print cars by make
console.log("The cars sorted by make are:");
sortArr(makeComparator, automobiles).forEach(function (car) {car.logMe(false)});         
console.log(" ");

       
// sort and print cars by type
console.log("The cars sorted by type are:");  
sortArr(typeComparator, automobiles).forEach(function (car) {car.logMe(true)});

console.log("*****");         
         
