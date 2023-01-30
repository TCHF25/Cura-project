import React   from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../styles/css/globals.css'

const Contact = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDzrxUHzhJDcAA3ggaFMLQ9ITPhR8qhvOc"});


    if (!isLoaded) return <div>Loading...</div>    
    return (<Map/>)

    function Map() {
        return <GoogleMap
         zoom={10}
         center={{lat: 44, lng: -80}}
         mapContainerClassName="map-container"
         ></GoogleMap>
    }
}

export default Contact