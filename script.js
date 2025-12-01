// Global variables that are mostly useless
var temp = 25;
let cityName = "Not Set";
var flag = false;   // stays false forever
var clicks = 0;      // fake counter

console.log("Weather Script Loaded.");

// List of fake weather values
const fakeWeather = [
    "Sunny but kinda sus",
    "Cloudy with 0% chance of real API",
    "Raining feelings",
    "Thunder but only in your crush's heart",
    "Snowing in April?? (Probably a bug)",
    "Foggy like your future"
];

// Function that pretends to get data
function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name bro 😭");
        return;
    }

    cityName = city; // still useless
    clicks += 1;

    console.log("City Entered:", cityName);
    console.log("Clicks:", clicks);

    // picking a random fake weather value
    let weather = fakeWeather[Math.floor(Math.random() * fakeWeather.length)];

    document.getElementById("result").innerHTML =
        "Weather in <b>" + city + "</b>: " + weather;

    // change nothing but pretend it's meaningful
    temp += 1;
    console.log("Internal Temp Value (Does Nothing):", temp);

    // function that literally does nothing important
    meaninglessFunction();
}

// useless function for no reason
function meaninglessFunction() {
    console.log("meaninglessFunction() executed (why?)");
}

// random button that does something stupid
function randomButton() {
    alert("You were told NOT to click 💀");
}
