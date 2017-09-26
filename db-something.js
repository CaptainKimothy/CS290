
  <h1>
    Welcome to your Exercise Tracker!
  </h1>
  <body>
(function table() {
var name = document.getElementById("name");
var reps = document.getElementById("reps");
var weight = document.getElementById("weight");
var date = document.getElementById("date");
var lbs = document.getElementById("lbs");
var tableElem = document.getElementById("table");
document.getElementById("submit").addEventListener("click", function () {
var newRow = tableElem.insertRow(-1);
var newCell = newRow.insertCell(0);
var newText = document.createTextNode(name.value);
newCell.appendChild(newText);
newCell = newRow.insertCell(1);
newText = document.createTextNode(reps.value);
newCell.appendChild(newText);
newCell = newRow.insertCell(2);
newText = document.createTextNode(weight.value);
newCell.appendChild(newText);
newCell = newRow.insertCell(3);
newText = document.createTextNode(date.value);
newCell.appendChild(newText);
newCell = newRow.insertCell(4);
newText = document.createTextNode(lbs.value);
newCell.appendChild(newText);
}
})();


    <form action="" method="post" name="new_entry">
    <fieldset>
        <legend>Enter Exercise Information:</legend>
        <label>Name of Exercise:
            <input type="text" name="exercise" size="30" maxlength="100" id="exercise">
        </label>
        <br />
        <label>Number of Reps:
            <input type="text" name="reps" size="30" maxlength="100" id="reps">
        </label>
        <br />
      <label>Weight Used (Enter 0 if none):
            <input type="text" name="weight" size="30" maxlength="100" id="weight">
        </label>
        <br />
      <label>Date (yyyy-mm-dd):
            <input type="text" name="date" size="30" maxlength="100" id="date">
        </label>
        <br />
      <label>Pounds (Enter 1) or Kilograms (Enter 0):
            <input type="text" name="lbs" size="30" maxlength="100" id="lbs">
        </label>
        <br />
        <br />
        <INPUT type="submit" value="Submit" onclick="addRow('dataTable')" />
    </fieldset>
    </form>



    document.addEventListener('DOMContentLoaded', table);
function table() {
 document.getElementById('submit').addEventListener('click', function(event){
 
 
 var name = document.getElementById("name");
 var reps = document.getElementById("reps");
 var weight = document.getElementById("weight");
 var date = document.getElementById("date");
 var lbs = document.getElementById("lbs");

 var req = new XMLHttpRequest();
 
 var payload = {name:null, reps:null, weight:null, date:null, lbs:null};
 payload.name = document.getElementById('name').value;
req.open('GET', 'http://52.89.112.98:8080', true);
 req.setRequestHeader("Content-type", "application/json");
 req.addEventListener('load', function(){
 if(req.status >= 200 && req.status < 400) {
 
 var response = JSON.parse(req.responseText);
 document.getElementById('name').textContent = response.name;
 console.log(response.name);
 console.log(response);
 
 var newRow = tableElem.insertRow(-1);
 var newCell = newRow.insertCell(0);
 var newText = document.createTextNode(name.value);
 newCell.appendChild(newText);
 newCell = newRow.insertCell(1);
 newText = document.createTextNode(reps.value);
 newCell.appendChild(newText);
 newCell = newRow.insertCell(2);
 newText = document.createTextNode(weight.value);
 newCell.appendChild(newText);
 newCell = newRow.insertCell(3);
 newText = document.createTextNode(date.value);
 newCell.appendChild(newText);
 newCell = newRow.insertCell(4);
 newText = document.createTextNode(lbs.value);
 newCell.appendChild(newText); 
 }
 else{
 console.log("Error in network request: " + request.status);
 }
 });
 req.send(JSON.stringify(payload));
 event.preventDefault();
})
}