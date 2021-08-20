function updateMap() {
    console.log("Updating map with realtime data")
    fetch("data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                    
                    
                }

                else{
                    color = `rgb(${cases}, 191, 255)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                    // "icon-size": ['interpolate', ['linear'], ['zoom'], 10, 1, 15, 0.5]
                    
                })
                .setLngLat([longitude, latitude])
                .addTo(map); 

                // map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));

               
            });
        })
}

let interval = 2000;
setInterval( updateMap, interval); 