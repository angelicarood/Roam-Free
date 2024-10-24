/* eslint-disable no-undef */
import React, { useEffect } from 'react';

const SouthMap = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 37.8930, lng: -112.1871 }
      });

      const places = [
        { lat: 38.2767, lng: -112.6412, name: 'Minersville Reservoir', url: 'https://stateparks.utah.gov/parks/minersville/' }, // Beaver County
        { lat: 38.2721, lng: -112.6911, name: 'Beaver Canyon Scenic Drive', url: 'https://utah.com/scenic-drive/beaver-canyon' }, // Beaver County
        { lat: 38.3409, lng: -112.8603, name: 'Big Rock Candy Mountain', url: 'https://utah.com/big-rock-candy-mountain' }, // Piute County
        { lat: 38.4563, lng: -111.508, name: 'Capitol Reef National Park', url: 'https://www.nps.gov/care/index.htm' }, // Wayne County (free entrance on certain days)
        { lat: 37.8197, lng: -113.5159, name: 'Cedar Breaks National Monument', url: 'https://www.nps.gov/cebr/index.htm' }, // Iron County (free entrance on certain days)
        { lat: 37.6951, lng: -112.8497, name: 'Parowan Gap Petroglyphs', url: 'https://utah.com/historic-sites/parowan-gap-petroglyphs' }, // Iron County
        { lat: 37.7907, lng: -112.4015, name: 'Bryce Canyon National Park', url: 'https://www.nps.gov/brca/index.htm' }, // Garfield County (free entrance on certain days)
        { lat: 37.1041, lng: -113.5841, name: 'Red Cliffs Desert Reserve', url: 'https://redcliffsdesertreserve.com/' }, // Washington County
        { lat: 37.0451, lng: -113.5207, name: 'St. George Historic District', url: 'https://www.visitstgeorge.com/historic-downtown/' }, // Washington County
        { lat: 37.2675, lng: -112.9402, name: 'Zion National Park', url: 'https://www.nps.gov/zion/index.htm' }, // Washington/Kane Counties (free entrance on certain days)
        { lat: 37.2705, lng: -112.9544, name: 'Coral Pink Sand Dunes State Park', url: 'https://stateparks.utah.gov/parks/coral-pink/' }, // Kane County
        { lat: 37.1834, lng: -109.8613, name: 'Valley of the Gods', url: 'https://utah.com/monument-valley/valley-of-the-gods' }, // San Juan County
        { lat: 37.6279, lng: -109.4892, name: 'Bears Ears National Monument', url: 'https://www.blm.gov/programs/national-conservation-lands/utah/bears-ears-national-monument' } // San Juan County
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
            <h3 style="font-size: 18px; margin-bottom: 8px; color: ${darkMode ? 'white' : 'black'}; background-color: ${darkMode ? 'black' : 'white'}; padding: 8px 16px; border-radius: 4px;
            ">${place.name}</h3>

            <a href="${place.url}" target="_blank" style="color: ${darkMode ? 'white' : 'black'}; background-color: ${darkMode ? 'black' : 'white'}; padding: 8px 16px; border-radius: 4px;
             text-decoration: none;">Visit Website</a>
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
  }, [darkMode]);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default SouthMap;
