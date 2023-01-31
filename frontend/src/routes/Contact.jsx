import React   from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../styles/css/contact.css'

const Contact = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDzrxUHzhJDcAA3ggaFMLQ9ITPhR8qhvOc"});
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
                    <div className="map-title">
                        <h1 className="map-title">Contact us</h1>
                    </div>
                    
                </div>      
            </div>

    )    
}

export default Contact