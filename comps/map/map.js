import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map(){

    // const position = [49.28594, -123.11129];
    const position = [
        [49.28594, -123.11129],
        [49.285581150633966, -123.12012245876285],
        [49.28276795358473, -123.1164699145821],
        [49.28010484687972, -123.11012142014103],
        [49.273374980784865, -123.10037145876296],
        [49.262721001091556, -123.06927941643552],
        [49.24844626535717, -123.05598167410812],
        [49.24436337925635, -123.04537402992739],
        [49.23855530902799, -123.0317256145831],
        [49.22991271599505, -123.01265107225555],
        [49.22593989446889, -123.00385127225569],
        [49.220193228996386, -122.98845204229738],
        [49.21254265709066, -122.95914504342],
        [49.200068725477024, -122.94922489130668],
        [49.20159918383558, -122.91263972992837],
        [49.204943945073374, -122.90607708574763],

        [49.204575904842045, -122.87402738018886],
        [49.1991136014707, -122.85066387225632],
        [49.18971392944762, -122.84792071458409],
        [49.1829310367517, -122.84473292807587],

        [49.224860238697396, -122.88949270294468],
        [49.23268213068468, -122.88456287225554],
        [49.24875892482227, -122.89717730665],
        [49.25367827613695, -122.91868207173422]
    ]

    const pathOptions = [
       {color:"#0143a8"},
       {color:"#ff6f00"},
       {color:"#ff2dc8"}
    ]

    const w_c = [
        position[0],
        position[1],
        position[2],
        position[3],
        position[4],
        position[5],
        position[6],
        position[7],
        position[8],
        position[9],
        position[10],
        position[11],
        position[12],
        position[13],
        position[14],
        position[15]
    ]

    const c_kg = [
        position[15],
        position[16],
        position[17],
        position[18],
        position[19]
    ]

    const c_pwu = [
        position[15],
        position[20],
        position[21],
        position[22],
        position[23]
    ]

    const redOpt = {color : 'red'}

    // console.log(position[0])

    return(
        <MapContainer className={style.map} center={position[0]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <CircleMarker center={position[0]} pathOptions={redOpt} radius={20}>
                <Popup>Destination: Waterfront</Popup>
            </CircleMarker>

            <Polyline pathOptions={pathOptions[0]} positions={w_c}/>

            <Marker position={position[0]}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>

            <Marker position={position[1]}>
                <Popup>
                    Burrard Station
                </Popup>
            </Marker>

            <Marker position={position[2]}>
                <Popup>
                    Granville Station
                </Popup>
            </Marker>

            <Marker position={position[3]}>
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>

            <Marker position={position[4]}>
                <Popup>
                    Main Street–Science World Station
                </Popup>
            </Marker>

            <Marker position={position[5]}>
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>

            <Marker position={position[6]}>
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>

            <Marker position={position[7]}>
                <Popup>
                    29th Avenue Station
                </Popup>
            </Marker>

            <Marker position={position[8]}>
                <Popup>
                    Joyce-Collingwood Station
                </Popup>
            </Marker>

            <Marker position={position[9]}>
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>

            <Marker position={position[10]}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>

            <Marker position={position[11]}>
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>

            <Marker position={position[12]}>
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>

            <Marker position={position[13]}>
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>

            <Marker position={position[14]}>
                <Popup>
                    New Westminster Station
                </Popup>
            </Marker>

            <Marker position={position[15]}>
                <Popup>
                    Columbia Station
                </Popup>
            </Marker>

            {/* Waterfront to king george  */}

            <Polyline pathOptions={pathOptions[1]} positions={c_kg}/>

            <Marker position={position[16]}>
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>

            <Marker position={position[17]}>
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>

            <Marker position={position[18]}>
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>

            <Marker position={position[19]}>
                <Popup>
                    King George Station
                </Popup>
            </Marker>

            <CircleMarker center={position[19]} pathOptions={redOpt} radius={20}>
                <Popup>Destination: King George</Popup>
            </CircleMarker>

            {/* Waterfront to production way */}

            <Polyline pathOptions={pathOptions[2]} positions={c_pwu}/>

            <Marker position={position[20]}>
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>

            <Marker position={position[21]}>
                <Popup>
                    Braid Station
                </Popup>
            </Marker>

            <Marker position={position[22]}>
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>

            <Marker position={position[23]}>
                <Popup>
                    Production Way-University Station
                </Popup>
            </Marker>

            <CircleMarker center={position[23]} pathOptions={redOpt} radius={20}>
                <Popup>Destination: Production Way-University</Popup>
            </CircleMarker>


        </MapContainer>
    )
}