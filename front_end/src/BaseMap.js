import React from "react"
//--For the Mapping--
//react ref
//https://react-leaflet.js.org/docs/start-installation/
//script ref
//https://leafletjs.com/examples/quick-start/
//to make things work correctly you need to add two scripts to the header
//$ npm install react react-dom leaflet
//$ npm install react-leaflet
//$ npm install -D @types/leaflet
import { MapContainer, TileLayer, Marker, Popup, Rectangle, useMap, useMapEvent } from 'react-leaflet'
//--For the MGRS--
//library ref
//https://www.movable-type.co.uk/scripts/geodesy-library.html#mgrs
//$ npm install geodesy
import { LatLon } from "geodesy/mgrs.js"

const center = [30.2760, -97.7480]
const zoom = 13

//-----This is for prettyfing the text around the map-----
const DisplayPosition = ({ map, setLocation }) => {
    const [position, setPosition] = React.useState(map.getCenter())
    const [mgrs, setMGRS] = React.useState("")

    const resetButton = React.useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = React.useCallback(() => {
        setPosition(map.getCenter())
        //the following is the flow of data to go from lat long to mgrs
        // var latLongP = new LatLon(position.lat.toFixed(4), position.lng.toFixed(4))
        // var utmCoord = latLongP.toUtm();
        // var mgrsGRef = utmCoord.toMgrs();
        //console.log(mgrsGRef.toString()); // '31U CT 03189 87193'
        // setMGRS(mgrsGRef.toString())
        //using position wouldn't update in real time
        setMGRS(new LatLon(map.getCenter().lat.toFixed(3), map.getCenter().lng.toFixed(3)).toUtm().toMgrs().toString())
        
    }, [map])

    React.useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <br />
            MGRS: {mgrs}
            <br />
            <button onClick={resetButton}>reset</button><button 
            onClick={()=>setLocation(mgrs)}>set position</button>
        </p>
    )
}
//----- This is for displaying the map -----

const BaseMap = props => {
    const [map, setMap] = React.useState(null)

    const displayMap = React.useMemo(
        () => ( //MapContainer holds all the info for the frame
            <MapContainer
                id="mapcontainer"
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                whenCreated={setMap}
                maxZoom={18}
                minZoom={3}

            >
                {/* this draws the background */}
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* here is where we can add list.map to create icons dynamically */}

            </MapContainer>
        ),
        [],
    )

    return (
        <div class="map">
            {map ? <DisplayPosition map={map} setLocation={props.setLocation} /> : null}
            {displayMap}
            {/* <button onClick={() => { console.log(map) }}>console log map</button> */}
        </div>
    )
}



export default BaseMap 
