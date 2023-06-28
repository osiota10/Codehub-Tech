import React, { useEffect } from 'react';

const GoogleMap = () => {
    useEffect(() => {
        // Load the Google Maps API script dynamically
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_URL}&libraries=places`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Initialize the map once the API script is loaded
        script.onload = initMap;

        // Clean up the script tag on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initMap = () => {
        // Create a new map instance
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 6.207449, lng: 6.722695 }, // Set the initial map center coordinates
            zoom: 17, // Set the initial zoom level
        });

        // Add a marker at the business location
        new window.google.maps.Marker({
            position: { lat: 6.207449, lng: 6.722695 },
            map: map,
            title: 'Back Shops, Stephen Keshi Stadium, Asaba, Nigeria',
        });

        // Add any additional map configurations or markers as needed
        // Example: map.setOptions({ draggable: false });
        // Example: new window.google.maps.Marker({ position: { lat: 37.7749, lng: -122.4194 }, map });
    };

    return <div id="map" style={{ height: '400px' }}></div>;
};

export default GoogleMap;
