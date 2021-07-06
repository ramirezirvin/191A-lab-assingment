const map = L.map('map').setView([34.0709, -118.444], 4);
const colors = ["red", "green", "blue"];
let colorName = "";

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
      
fetch("citiesmap.geojson")
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
            // the leaflet method for adding a geojson
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    let x = Math.floor(Math.random()*colors.length)
                    colorName = colors[x];
                    colors.splice(x,1);
                    return L.circleMarker(latlng, {color: colorName});
                }
            }).bindPopup(function (layer) {
                return layer.feature.properties.name;
            })
            .addTo(map)
            .openPopup();
        });


  
        const map = L.map('map').setView([34.0522, -118.2436], 5);

        // Leaflet tile layer, i.e. the base map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        //JavaScript let variable declaration to create a marker
        let marker1 = L.marker([-95.36270141601562, 29.758118557057607]).addTo(map)
                .bindPopup('Houston, Texas where I was born and grew up. ')
                .openPopup();
        
        let marker2 = L.marker([-99.13375854492186, 19.429686571587755]).addTo(map)
                .bindPopup('Mexico City, Mexico where my mother was born, and where I would spend 5 months out of the year as a kid ')
                .openPopup();
        
        let marker3 = L.marker([ -118.24378967285155, 34.049814864716275]).addTo(map)
                .bindPopup('Los Angeles, California where I currently live ')
                .openPopup();
        
