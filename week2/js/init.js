const myMap = L.map('mapArea').setView([34.0709, -118.444], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's flyTo on our map called "myMap"
    newButton.addEventListener('click', function(){
        myMap.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}

// use our marker functions
addMarker(34.0709, -118.444, "Hell", "it's unfortunately virtual")
addMarker(59.913868, 10.752245, "The cold never bothered me anyway", " the country where Frozen is based on")
addMarker(35.652832, 139.839478, "Pokemon was created here", "anime is produced here")
addMarker(-33.448891, -70.669266, "Best wine that's based in LATAM", "their spanish dialect is the wiersest one out there")
addMarker(55.675758, 12.569020, "Hopefully attending grad school here", "great quality of life")