/* eslint-disable no-undef */
import React, { useEffect } from 'react';

const CenterMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 39.1933, lng: -111.8194 }
      });

      const places = [
        { lat: 39.8416, lng: -111.8378, name: 'Yuba State Park', url: 'https://stateparks.utah.gov/parks/yuba/' }, // Juab County
        { lat: 39.7108, lng: -112.258, name: 'Topaz Mountain', url: 'https://www.utah.com/rock-hounding/topaz-mountain' }, // Juab/Millard Counties
        { lat: 39.0449, lng: -112.5263, name: 'Sevier Lake', url: 'https://www.utah.com/lakes/sevier-lake' }, // Millard County
        { lat: 39.3652, lng: -111.5855, name: 'Maple Canyon', url: 'https://www.summitpost.org/maple-canyon/151476' }, // Sanpete County
        { lat: 39.5735, lng: -110.7883, name: 'Nine Mile Canyon', url: 'https://stateparks.utah.gov/parks/nine-mile-canyon/' }, // Carbon County
        { lat: 39.2148, lng: -110.7122, name: 'Goblin Valley State Park', url: 'https://stateparks.utah.gov/parks/goblin-valley/' }, // Emery County (free on some days)
        { lat: 38.5733, lng: -109.5498, name: 'Arches National Park', url: 'https://www.nps.gov/arch/index.htm' }, // Grand County (free on designated days)
        { lat: 38.6051, lng: -111.6372, name: 'Fishlake National Forest', url: 'https://www.fs.usda.gov/fishlake/' }, // Sevier County
        { lat: 38.6007, lng: -111.8962, name: 'Big Rock Candy Mountain', url: 'https://utah.com/big-rock-candy-mountain' }, // Sevier County
      ];

      places.forEach(place => addMarker(map, place));
    };

    const addMarker = (map, place) => {
      const marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map,
        title: place.name,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", 
          scaledSize: new google.maps.Size(40, 40) 
        },
        animation: google.maps.Animation.DROP
      });
    
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="text-align: center; font-family: Arial, sans-serif; max-width: 200px;">
            <h3 style="font-size: 18px; margin-bottom: 8px;">${place.name}</h3>

            <a href="${place.url}" target="_blank" style="color: #007bff; text-decoration: none;">Visit Website</a>
          </div>`
      });
    
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
 
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => marker.setAnimation(null), 1400); 
      });
    
      map.addListener('click', () => {
        infoWindow.close();
      });
    };
    
    if (window.google) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default CenterMap;
