//Day 3>>task-3

const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
  const countriesData = JSON.parse(this.responseText);

    console.log(countriesData.length)

    for (let data = 0; data < countriesData.length; data++){
      console.log(countriesData[data].name.common);
      console.log(countriesData[data].region);
      console.log(countriesData[data].subregion);
      console.log(countriesData[data].population);
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET",API_URL);
  req.send();
 