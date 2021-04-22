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
import { MapContainer, TileLayer, Marker, Popup, Rectangle, useMap, useMapEvent, Tooltip } from 'react-leaflet'
import { Control, icon, marker } from "leaflet"
//--For the MGRS--
//library ref
//https://www.movable-type.co.uk/scripts/geodesy-library.html#mgrs
//$ npm install geodesy
import Mgrs, { LatLon } from "geodesy/mgrs.js"

const center = [30.2760, -97.7480]
const zoom = 13

//-----This is for prettyfing the text around the map-----
const DisplayPosition = ({ map, setLocation, summary }) => {
    const [position, setPosition] = React.useState(map.getCenter())
    const [mgrs, setMGRS] = React.useState(new LatLon(map.getCenter().lat.toFixed(3), map.getCenter().lng.toFixed(3)).toUtm().toMgrs().toString())

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
        <span>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <br />
            MGRS: {mgrs}
            {!summary ? <span>
                <br />
                <button
                    onClick={() => setLocation(mgrs)}>set position</button><button
                        onClick={resetButton}>reset</button>
            </span> : ""}
        </span>
    )
}

//----- this is to have the center crosshair -----

const CrossHiarFunction = ({ map }) => {

    var crosshairIcon = icon({
        iconUrl: './ThemedStyles/Location_29-512.png' , //'images/crosshair.png',
        iconSize: [20, 20], // size of the icon
        iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
    });

    var crosshair = new marker(map.getCenter(), { icon: crosshairIcon, clickable: false });
    crosshair.addTo(map);

    // Move the crosshair to the center of the map when the user pans
    map.on('move', function (e) {
        crosshair.setLatLng(map.getCenter());
    });

    return (
        ""
    )

}
//----- this is for nice panning on click -----

function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })

    return null
}


//----- This is for displaying the map -----

const BaseMap = props => {
    const [map, setMap] = React.useState(null)
    const animateRef = React.useRef(true)
    

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
                {props.summary ? props.requests.map((request, index) => {
                    if (props.currentSummary === 'All' || props.currentSummary === request.responder) {
                        //how to regex: https://stackoverflow.com/questions/16617053/javascript-to-check-string-in-this-format
                        var regex = /[0-9]{2}[A-Z]{1} [A-Z]{2} [0-9]{5} [0-9]{5}/;
                        // console.log("regex comp", regex, request.location, regex.test(request.location))
                        if (request.location.length && regex.test(request.location)) {

                            // const mgrsGrid = Mgrs.parse(request.location);
                            // const utmCoord = mgrsGrid.toUtm();
                            // const latLongP = utmCoord.toLatLon();
                            // console.log(latLongP.toString('d', 2)); // '52.20°N, 000.12°E'
                            // if(latLongP.lat&&latLongP.lng){
                            //this creates a lat long object
                            var coord = Mgrs.parse(request.location).toUtm().toLatLon()
                            //this will check that it is a valid object?
                            if (coord.lat && coord.lng) {
                                return (<Marker position={[coord.lat, coord.lng]}>
                                    <Tooltip
                                        offset={[0, 0]}
                                        opacity={1}
                                        permanent>
                                        {request.callSign}
                                    </Tooltip>
                                    <Popup>
                                        {request.location}<br />
                                        {request.Responder}
                                    </Popup>
                                </Marker>)
                            }
                        }
                    }
                }
                ) : ""}

            <SetViewOnClick animateRef={animateRef} />
            </MapContainer>
        ),
        [],
    )

    return (
        <div class="map">
            {map ? <DisplayPosition
                map={map}
                setLocation={props.setLocation}
                summary={props.summary} /> : null}
            {displayMap}
            {map ? <CrossHiarFunction map={map} /> : null}
            {/* <button onClick={() => { console.log(map) }}>console log map</button> */}
        </div>
    )
}



export default BaseMap 
