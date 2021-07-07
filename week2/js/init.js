const myMap = L.map('mapArea').setView([34.0709, -118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// adding markers
let work = L.marker([34.0709, -118.444]).addTo(myMap)
		.bindPopup('Where I work on campus')

let home = L.marker([34.7409, -122.484]).addTo(myMap)
		.bindPopup('Second point')

let random = L.marker([39.7409, -122.484]).addTo(myMap)
		.bindPopup('Third Point')