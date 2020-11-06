// Get saved data from sessionStorage
// Your code here

let title = sessionStorage.getItem("Title");
let lat_max = sessionStorage.getItem("Lat_Max");
let lat_min = sessionStorage.getItem("Lat_Min");
let lon_max = sessionStorage.getItem("Lon_Max");
let lon_min = sessionStorage.getItem("Lon_Min");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
document.querySelector('#Title').innerHTML = title;
document.querySelector('#Lat_Max').innerHTML = lat_max;
document.querySelector('#Lat_Min').innerHTML = lat_min;
document.querySelector('#Lon_Max').innerHTML = lon_max;
document.querySelector('#Lon_Min').innerHTML = lon_min;
