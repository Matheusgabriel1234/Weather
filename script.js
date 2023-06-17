





const cityText = document.querySelector("#city-text")
const searchbtn = document.querySelector("#search")

const cityElement = document.querySelector("span")
const tempElement = document.querySelector("#temperature span")
const  descElement = document.querySelector("#description")
const  countryElement = document.getElementById("country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")
const weatherIcon = document.querySelector("#weather-icon")
const apiUnsplash = "https://source.unsplash.com/1600x900/?"

const getShowWeather = async (city)=>{

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4dc229ada1a83bd440e0f3385f80b1b3&lang=pt_br`
    const weatherResponse = await fetch(apiUrl)
    const weatherJson = await weatherResponse.json()
    console.log(weatherJson)
 return weatherJson
}

const showWeather = async (city)=>{
 const weatherJson = await getShowWeather(city)
  

 cityElement.innerHTML = weatherJson.name
 tempElement.innerHTML = parseInt(weatherJson.main.temp)
 descElement.innerHTML = weatherJson.weather[0].description
 weatherIcon.setAttribute("src",`http://openweathermap.org/img/wn/${weatherJson.weather[0].icon}.png`)
   windElement.innerHTML = `${weatherJson.wind.speed}km/h`
   umidityElement.innerHTML = `${weatherJson.main.humidity}%`
   document.body.style.backgroundImage = `url("${apiUnsplash + city}")`
   console.log(city)
}




searchbtn.addEventListener("click",(event)=>{
  

    const city = cityText.value

    showWeather(city)
})


