import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map(){

    const position = [49.28594, -123.11129];

    return(
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <Marker position={position}>
                <Popup>
                    Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <Marker position={[49.285581150633966, -123.12012245876285]}>
                <Popup>
                    Skytrain. <br/> Burrard.
                </Popup>
            </Marker>

            <Marker position={[49.28276795358473, -123.1164699145821]}>
                <Popup>
                    Skytrain. <br/> Granville.
                </Popup>
            </Marker>

            <Marker position={[49.28010484687972, -123.11012142014103]}>
                <Popup>
                    Skytrain. <br/> Stadium-Chinatown.
                </Popup>
            </Marker>

            <Marker position={[49.273374980784865, -123.10037145876296]}>
                <Popup>
                    Skytrain. <br/> Main Street–Science World .
                </Popup>
            </Marker>

            <Marker position={[49.262721001091556, -123.06927941643552]}>
                <Popup>
                    Skytrain. <br/> Commercial-Broadway.
                </Popup>
            </Marker>

            <Marker position={[49.24844626535717, -123.05598167410812]}>
                <Popup>
                    Skytrain. <br/> Nanaimo.
                </Popup>
            </Marker>

            <Marker position={[49.24436337925635, -123.04537402992739]}>
                <Popup>
                    Skytrain. <br/> 29th Avenue.
                </Popup>
            </Marker>

            <Marker position={[49.23855530902799, -123.0317256145831]}>
                <Popup>
                    Skytrain. <br/> Joyce-Collingwood.
                </Popup>
            </Marker>

            <Marker position={[49.22991271599505, -123.01265107225555]}>
                <Popup>
                    Skytrain. <br/> Patterson.
                </Popup>
            </Marker>

            <Marker position={[49.22593989446889, -123.00385127225569]}>
                <Popup>
                    Skytrain. <br/> Metrotown.
                </Popup>
            </Marker>

            <Marker position={[49.220193228996386, -122.98845204229738]}>
                <Popup>
                    Skytrain. <br/> Royal Oak.
                </Popup>
            </Marker>

            <Marker position={[49.21254265709066, -122.95914504342]}>
                <Popup>
                    Skytrain. <br/> Edmonds.
                </Popup>
            </Marker>

            <Marker position={[49.200068725477024, -122.94922489130668]}>
                <Popup>
                    Skytrain. <br/> 22nd Street.
                </Popup>
            </Marker>

            <Marker position={[49.20159918383558, -122.91263972992837]}>
                <Popup>
                    Skytrain. <br/> New Westminster.
                </Popup>
            </Marker>

            <Marker position={[49.204943945073374, -122.90607708574763]}>
                <Popup>
                    Skytrain. <br/> Columbia.
                </Popup>
            </Marker>

            {/* Waterfront to king george  */}
            
            <Marker position={[49.204575904842045, -122.87402738018886]}>
                <Popup>
                    Skytrain. <br/> Scott Road.
                </Popup>
            </Marker>

            <Marker position={[49.1991136014707, -122.85066387225632]}>
                <Popup>
                    Skytrain. <br/> Gateway.
                </Popup>
            </Marker>

            <Marker position={[49.18971392944762, -122.84792071458409]}>
                <Popup>
                    Skytrain. <br/> Surrey Central.
                </Popup>
            </Marker>

            <Marker position={[49.1829310367517, -122.84473292807587]}>
                <Popup>
                    Skytrain. <br/> King George.
                </Popup>
            </Marker>

            {/* Waterfront to production way */}

            <Marker position={[49.224860238697396, -122.88949270294468]}>
                <Popup>
                    Skytrain. <br/> Sapperton.
                </Popup>
            </Marker>

            <Marker position={[49.23268213068468, -122.88456287225554]}>
                <Popup>
                    Skytrain. <br/> Braid.
                </Popup>
            </Marker>

            <Marker position={[49.24875892482227, -122.89717730665]}>
                <Popup>
                    Skytrain. <br/> Lougheed Town Centre.
                </Popup>
            </Marker>

            <Marker position={[49.25367827613695, -122.91868207173422]}>
                <Popup>
                    Skytrain. <br/> Production Way-University.
                </Popup>
            </Marker>


        </MapContainer>
    )
}