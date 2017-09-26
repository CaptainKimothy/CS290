// Some of this code is based on code from the course website

document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('subButton').addEventListener('click', function(event){
          
          

	  if(document.getElementById("city") == null){
	  var req = new XMLHttpRequest();
	  
          req.open('GET', 'api.openweathermap.org/data/2.5/weather?q=' + zipCode + ',us&appid=df6c009c60e3c7cbe14481594ed9c9ab', true);
          req.send(null);
          var response = JSON.parse(req.responseText);
	  console.log(response);
	  document.getElementById("zipCode").textContent = response.name;

	  event.preventDefault();

	  if (data.cod >=400 || data.cod <200)
          document.getElementById("weatherOutput").innerText = data.message;

          else
          document.getElementById("weatherOutput").innerHTML = `City:${data.name} Temperature:${(data.main.temp - 273.15).toFixed(1)}°C Humidity:${data.main.humidity}%`;
  

	  }


	  else{
	  var req = new XMLHttpRequest();
	  req.open('GET', 'api.openweathermap.org/data/2.5/weather?q=' + city + ',us&appid=df6c009c60e3c7cbe14481594ed9c9ab', true);
          req.send(null);
          var response = JSON.parse(req.responseText);
	  console.log(response);
	  document.getElementById("city").textContent = response.name;

	  event.preventDefault();

	  if (data.cod >=400 || data.cod <200)
          document.getElementById("weatherOutput").innerText = data.message;

          else
          document.getElementById("weatherOutput").innerHTML = `City:${data.name} Temperature:${(data.main.temp - 273.15).toFixed(1)}°C Humidity:${data.main.humidity}%`;


	  }



          
          
        })
      }
src="weatherAppFunctions.js"

 