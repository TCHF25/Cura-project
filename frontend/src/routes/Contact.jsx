import React   from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../styles/css/contact.css'

const Contact = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
    });
    if (!isLoaded) return <div>Loading...</div>    

    function Map() {
        return <GoogleMap
         zoom={10}
         center={{lat: 44, lng: -80}}
         mapContainerClassName="map-container">   
         </GoogleMap>
    }


    return ( 
            <div>
                <div className="map-background">
                    <div className="map-title-container">
                        <h1 className="map-title">CONTACT US</h1>
                    </div>
                    <div className="map">
                        <Map />
                    </div>
                    <div className="under-map-contacts">
                        <div className="map-contacts">
                            <h3 className="contacts">Cura</h3>
                            <h3 className="contacts">Beirut, Lebanon</h3>
                            <h3 className="contacts">Mazraa, Barbour</h3>
                        </div>
                        <div className="map-contacts">
                            <h3 className="contacts">Beirut, Lebanon</h3>
                            <h3 className="contacts">Beirut, Lebanon</h3>
                            <h3 className="contacts">Beirut, Lebanon</h3>
                        </div>
                    </div>
                </div>      
            </div>

    )    
}

export default Contact