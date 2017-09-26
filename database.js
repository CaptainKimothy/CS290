document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('submit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          req.open('GET', 'C:/Users/Pirate/Desktop/database.html', true);
          req.send(null);
          var response = JSON.parse(req.responseText);
          document.getElementById('exercise').textContent = response.exercise;
          document.getElementById('reps').textContent = response.reps;
	  document.getElementById('weight').textContent = response.weight;
	  document.getElementById('date').textContent = response.date;
	  document.getElementById('lbs').textContent = response.lbs;
          
      

	
	var newRow = tableElem.insertRow(-1);
 	var newCell = newRow.insertCell(0);
 	var newText = document.createTextNode(exercise.value);
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
event.preventDefault();
 	  })
      }

