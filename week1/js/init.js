let y = 19 + 19
            y = y + y //76???
            const date = 23

            console.log(y)
            console.log("Hello Asian Am 191A!");






        const map = L.map('map').setView([34.0709, -118.444], 8);
        const colors = ["red", "green", "blue"];
        let colorName = "";

        // Leaflet tile layer, i.e. the base map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        //JavaScript let variable declaration to create a marker
        let marker = L.marker([34.0709, -118.444]).addTo(map)
                .bindPopup('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I work in ')
                .openPopup();
                
        fetch("citiesmap.geojson")
            .then(response => {
                return response.json();
                })
            .then(data =>{
                // Basic Leaflet method to add GeoJSON data
                    // the leaflet method for adding a geojson
                    L.geoJSON(data).bindPopup(function (layer) {
                        return layer.feature.properties.Cities-Lived;
                    }).addTo(map);
                });