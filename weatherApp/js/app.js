const button = document.querySelector(".btn")
const inputText = document.getElementById("inputText");
const showData = document.getElementById("showData");
const api_Key = "ba26efea7c27423d5659977ed56a7926";
const list = document.getElementById("list");
const getshowResult = (cityName) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_Key}`)
    .then(res => {
        console.log(res.data);
       showData.innerHTML = `<ul id="box1">
       <h2>${res.data.name},${res.data.sys.country}</h2>
       <i>${res.data.weather[0].description}</i>
       <li>${res.data.main.temp}°C</li>
      </ul> `
        
    })
    .catch( (e) => {
        console.log("error");
    })
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = inputText.value;
    getshowResult(cityName);
    inputText.value="";
    
})



