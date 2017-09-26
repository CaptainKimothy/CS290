// initialize row count variable
var tableLength = 0;

// make sure button is not null and add event listener
document.addEventListener('DOMContentLoaded', function(){
var el = document.getElementById("submitButton");
if(el){console.log("working!");
  el.addEventListener('click', insert); }
else{console.log("not working :(");}


// inserts data to database and updates HTML table
function insert(event){
var req = new XMLHttpRequest();


	// assign all values to variables
        var EXERCISE = document.getElementById("exercise").value;
        var REPS = document.getElementById("reps").value;
        var WEIGHT = document.getElementById("weight").value;
        var DATE = document.getElementById("date").value;
        var POUNDS = document.getElementById("lbs").value;
	
// create the GET request by appending all variables to URL
req.open('GET', 'http://52.89.94.220:3000/insert?exercise=' + EXERCISE + "&reps=" + REPS + "&weight=" + WEIGHT + "&date=" + DATE + "&lbs=" + POUNDS, true);

  req.addEventListener('load', function(){
	// if request is successful, build table
	if(req.status >= 200 && req.status < 400){
		
		var response = JSON.parse(req.responseText);
		var table = document.getElementById("dataTable");
		//var body = document.getElementById("tBody");
		var newRow = table.insertRow(-1); 
	        var newCell = newRow.insertCell(0);
		newCell.innerHTML = EXERCISE;
	        newRow.appendChild(newCell);

		newCell = newRow.insertCell(1);
                newCell.innerHTML = REPS;
                newRow.appendChild(newCell);

		newCell = newRow.insertCell(2);
                newCell.innerHTML = WEIGHT;
                newRow.appendChild(newCell);

		newCell = newRow.insertCell(3);
                newCell.innerHTML = DATE;
                newRow.appendChild(newCell);

		newCell = newRow.insertCell(4);
                newCell.innerHTML = POUNDS;
                newRow.appendChild(newCell);

		

		newCell = newRow.insertCell(5);
		newCell.innerHTML = '<input type="button" id="edit" value="Edit" name=tableLength></button>';
		newRow.appendChild(newCell);

/*
		newCell = newRow.insertCell(6);
                newCell.innerHTML = '<input type="button" id="delete" value="Delete" name=tableLength></button>';
		newRow.appendChild(newCell);
*/
    newCell = newRow.insertCell(6);
    var delForm = document.createElement('form');
    var del = document.createElement('input');
    del.type = 'submit';
    del.value = 'Delete';
    var rowId = document.createElement('input');
    rowId.type = 'hidden';
    rowId.id = 'ROWID';
    rowId.value = tableLength + 1;
    delForm.appendChild(del);
    delForm.appendChild(rowId);
    var boundEvent = addEventListener.bind(delForm);
    boundEvent('click', deleteRow);
    newCell.appendChild(delForm);
    newRow.appendChild(newCell);




		// increment the row count
		tableLength += 1;
		
//		document.getElementById("delete").addEventListener('click', deleteRow);


	}else{
	console.log("Error:" + req.status);
	}

	});

req.send(null);
event.preventDefault();
}
});






function buildTable(){
 
  // create the get call
  var req = new XMLHttpRequest();
  req.open('GET', 'http://52.89.94.220:3000/', true);



   req.addEventListener('load', function(){

    // if the request is successful, build the table
    if(req.status >= 200 && req.status < 400) {

        var response = JSON.parse(req.responseText);	
        console.log("Table response");
        console.log(response);
        var table = document.getElementById("dataTable");
	//var body = document.getElementById("tBody");
	
      	while(table.rows.length > 1) {
  	table.deleteRow(1);
	}
 	var newRow = table.insertRow(-1); 
        //var newCell = newRow.insertCell(0);

      
	
      // loop through all of the rows to build the new table
	var rowCount = 0;
	var i = 0;
	for (i in response.results){
	console.log(response.results);
	
	var newCell = newRow.insertCell(0);
        newCell.innerHTML = response.results[i].exercise; 
        newRow.appendChild(newCell);



        newCell = newRow.insertCell(1);
        newCell.innerHTML = response.results[i].reps;
        newRow.appendChild(newCell);

        newCell = newRow.insertCell(2);
	newCell.innerHTML = response.results[i].weight;
        newRow.appendChild(newCell);

        newCell = newRow.insertCell(3);
        newCell.innerHTML = response.results[i].date;
        newRow.appendChild(newCell);

        newCell = newRow.insertCell(4);
        newCell.innerHTML = response.results[i].lbs;
        newRow.appendChild(newCell);


	newCell = newRow.insertCell(5);
        newCell.innerHTML = '<input type="button" id="edit" value="Edit" name=i></button>';
        newRow.appendChild(newCell);

        //newCell = newRow.insertCell(6);	
        //newCell.innerHTML = '<input type="button" id="delete" value="Delete" name=i></button>';
	//newRow.appendChild(newCell);


 newCell = newRow.insertCell(6);
    var delForm = document.createElement('form');
    var del = document.createElement('input');
    del.type = 'submit';
    del.value = 'Delete';
    
    var rowId = document.createElement('input');
    rowId.type = 'hidden';
    rowId.id = 'ROWID';
    rowId.value = rowCount + 1;
    delForm.appendChild(del);
    delForm.appendChild(rowId);
    var boundEvent = addEventListener.bind(delForm);
    boundEvent('click', deleteRow);
    newCell.appendChild(delForm);
    newRow.appendChild(newCell);

    rowCount += 1;

		
	//document.getElementById("delete").addEventListener('click', deleteRow);

	}

    }else{
        console.log("Error in network request: " + req.status);
      }
    });

 req.send(null);
 event.preventDefault();
}





function deleteRow(){
// try to get the id of the row that we're deleting
var ID = document.getElementById("ROWID").value;//this.name;
console.log(this);
console.log(ID);
var req = new XMLHttpRequest();


req.open('GET', 'http://52.89.94.220:3000/delete?id=' + ID, true);


 
 req.addEventListener('load', function(){
    // if request is successful, rebuild the table
    if(req.status >= 200 && req.status < 400) {
	console.log("delete successful");
	buildTable();

    }else{
	console.log("error: " + req.status);
     }
   });
req.send(null);
event.preventDefault();

}




