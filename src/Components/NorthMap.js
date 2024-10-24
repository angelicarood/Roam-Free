/* eslint-disable no-undef */
import React, { useEffect } from 'react';

const NorthMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 41.1400, lng: -111.9300 }
      });

      const places = [
      { lat: 41.6212, lng: -112.5523, name: 'Golden Spike National Historic Park', url: 'https://www.nps.gov/gosp/index.htm' },
      { lat: 41.5289, lng: -112.1077, name: 'Bear River Bird Refuge', url: 'https://www.fws.gov/refuge/bear-river-migratory-bird-refuge' },
      { lat: 41.7371, lng: -111.8321, name: 'Logan Canyon Scenic Drive', url: 'https://www.fs.usda.gov/recarea/uwcnf/recarea/?recid=8983' },
      { lat: 41.7387, lng: -111.8084, name: 'First Dam', url: 'https://www.explorelogan.com/' },
      { lat: 41.2252, lng: -111.9874, name: 'Ogden Nature Center', url: 'https://ogdennaturecenter.org/' },
      { lat: 41.2304, lng: -111.9626, name: 'Ogden River Parkway', url: 'https://www.ogdencity.com/767/Ogden-River-Parkway-Trail' },
      { lat: 40.9135, lng: -111.5768, name: 'East Canyon State Park', url: 'https://stateparks.utah.gov/parks/east-canyon/' },
      { lat: 41.0474, lng: -112.2309, name: 'Antelope Island State Park', url: 'https://stateparks.utah.gov/parks/antelope-island/' },
      { lat: 40.8908, lng: -111.8806, name: 'Bountiful Davis Art Center', url: 'https://www.bdac.org/' },
      { lat: 40.7436, lng: -111.8731, name: 'Liberty Park', url: 'https://www.slc.gov/parks/parks-division/liberty-park/' },
      { lat: 40.7592, lng: -111.8883, name: 'Salt Lake City Public Library', url: 'https://www.slcpl.org/' },
      { lat: 40.5581, lng: -112.3231, name: 'Deseret Peak Complex', url: 'https://tooeleco.org/parks-recreation/deseret-peak-complex/' },
      { lat: 40.7625, lng: -113.8526, name: 'Bonneville Salt Flats', url: 'https://www.blm.gov/visit/bonneville-salt-flats' },
      { lat: 40.2567, lng: -111.6577, name: 'Provo River Parkway Trail', url: 'https://www.utahvalley.com/listing/provo-river-parkway-trail/50/' },
      { lat: 40.3383, lng: -111.6117, name: 'Bridal Veil Falls', url: 'https://utahvalley.com/listing/bridal-veil-falls/90/' },
      { lat: 40.6197, lng: -111.4194, name: 'Jordanelle State Park', url: 'https://stateparks.utah.gov/parks/jordanelle/' },
      { lat: 40.5256, lng: -111.4749, name: 'Midway Ice Castles', url: 'https://icecastles.com/midway' },
      { lat: 40.6625, lng: -111.5138, name: 'McPolin Farm Nature Trail', url: 'https://www.visitparkcity.com/listing/mcpolin-farm/22004/' },
      { lat: 40.7405, lng: -111.5537, name: 'Summit County Library', url: 'https://www.thesummitcountylibrary.org/' },
      { lat: 40.9180, lng: -109.4425, name: 'Flaming Gorge Reservoir', url: 'https://www.fs.usda.gov/recarea/ashley/recarea/?recid=72191' },
      { lat: 40.1989, lng: -110.4206, name: 'Starvation State Park', url: 'https://stateparks.utah.gov/parks/starvation/' },
      { lat: 40.4459, lng: -109.5287, name: 'Vernal Dinosaur Museum Gardens', url: 'https://utahdinosaurs.org/' },
      { lat: 40.4562, lng: -109.5293, name: 'Uintah County Heritage Museum', url: 'https://uintahmuseum.org/' }
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
          <div style="text-align: center; font-family: Arial, sans-serif; max-width: 200px; position:cover;">
            <h3 style="font-size: 18px; margin: 40px;">${place.name}</h3>

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

export default NorthMap;
