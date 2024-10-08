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
        { lat: 40.7608, lng: -111.8910, name: 'Salt Lake City', url: 'https://www.slc.gov/' },
        { lat: 41.2230, lng: -111.9738, name: 'Ogden', url: 'https://www.ogdencity.com/' },
        { lat: 41.7355, lng: -111.8344, name: 'Logan', url: 'https://www.loganutah.org/' },
        { lat: 41.1616, lng: -112.0263, name: 'Layton', url: 'https://www.laytoncity.org/' },
        { lat: 40.6019, lng: -111.6392, name: 'Park City', url: 'https://www.parkcity.org/' },
        { lat: 40.6916, lng: -112.0010, name: 'West Valley City', url: 'https://www.wvc-ut.gov/' },
        { lat: 40.6097, lng: -111.9391, name: 'West Jordan', url: 'https://www.westjordan.utah.gov/' },
        { lat: 40.5622, lng: -111.9297, name: 'South Jordan', url: 'https://www.sjc.utah.gov/' },
        { lat: 40.5247, lng: -111.8638, name: 'Draper', url: 'https://www.draper.ut.us/' },
        { lat: 40.5640, lng: -111.8382, name: 'Sandy', url: 'https://sandy.utah.gov/' },
        { lat: 40.6869, lng: -111.8755, name: 'Millcreek', url: 'https://millcreek.us/' },
        { lat: 40.6669, lng: -111.8874, name: 'Murray', url: 'https://murray.utah.gov/' },
        { lat: 40.7189, lng: -111.8880, name: 'South Salt Lake', url: 'https://sslc.gov/' },
        { lat: 40.6197, lng: -111.8100, name: 'Cottonwood Heights', url: 'https://www.cottonwoodheights.utah.gov/' },
        { lat: 40.6111, lng: -111.8999, name: 'Midvale', url: 'https://www.midvalecity.org/' }
      ];

      places.forEach(place => addMarker(map, place));
    };

    const addMarker = (map, place) => {
      const marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map,
        title: place.name
      });
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="text-align: center;">
                    <h3>${place.name}</h3>
                    <a href="${place.url}" target="_blank">Visit Website</a>
                  </div>`
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    // Ensure the map is initialized when Google Maps API is ready
    if (window.google) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  return (
    <div>
      <h3> </h3>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default NorthMap;
