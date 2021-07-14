  const myMap = L.map('mapArea').setView([34.0709, -118.444], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// create a function to add markers
function addMarker(lat,lng,title,message,zoom){
    console.log(message)
    L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title,zoom); 
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title,zoom){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('mouseover', function(){
        myMap.flyTo([lat,lng],zoom); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
} 

// use our marker functions
addMarker(59.913868, 10.752245, "The cold never bothered me anyway", " the country where Frozen is based on")
addMarker(35.652832, 139.839478, "Dream travel destination", "anime is produced here")
addMarker(-33.448891, -70.669266, "Best wine that's based in LATAM", "their spanish dialect is the wiersest one out there")
addMarkerImage(55.675758, 12.569020, "Hopefully attending grad school here", "great quality of life")