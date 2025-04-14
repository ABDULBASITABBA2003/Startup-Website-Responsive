import React, { useEffect } from "react";
import './Map.css';

function GoogleMap() {
    useEffect(() => {
        const iframeData = document.getElementById("iframeId");
        const lat = 11.98307;
        const lon = 8.45671;
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    }, []); // Add empty dependency array to run once

    return (
        <div className="map-container">
            <iframe
                id="iframeId"
                className="google-map-iframe"
                height="300px"
                width="400px"
                style={{ border: '0' }} // Inline styling for the iframe border
            ></iframe>
        </div>
    );
}

export default GoogleMap;
