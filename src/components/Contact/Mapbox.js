import React from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import { useState } from 'react';

const Mapbox = () => {

    let [viewport , setViewport]  = useState({
        latitude: 18.52535,
        longitude: 73.8671,
        zoom: 15,
        width:"100%",
        height:"100%",
        pitch:40,
        interactive: false
    })
    
    return (
        <ReactMapGL

            mapStyle={'mapbox://styles/mapbox/dark-v10'}
            mapboxApiAccessToken ={'pk.eyJ1IjoibWF0cml4aXNyZWFsaXR5IiwiYSI6ImNrdWxpM2VlNjA0cjQyd3BpN3M2M3dkMWkifQ.ZtNTsIFH0mC4Uhf3Ps3Zug'}
            {...viewport}
            attributionControl={false}
            onViewportChange={(viewport) => setViewport(viewport)}
            
             >

            <Marker latitude={18.5312} longitude={73.8671} offsetLeft={-20} offsetTop={-10} height ={viewport.zoom*5/2} width={viewport.zoom*5/2} >
            <div>AISSMS IOIT,PUNE</div>
            <i className="fas fa-map-marker-alt" ></i>
            
            </Marker>
            
             </ReactMapGL>
    )
}

export default Mapbox
