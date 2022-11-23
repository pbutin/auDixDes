import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';


function Map(props) {
  const { events } = props;

  return (
    <div>
        <MapContainer center={[49.465726132330076, -1.260090373454273]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {events.map((event) => (
                (event.display) && 
                    <Marker  key={event.id}  position={[event.long, event.lat]}>
                        <Popup>
                           { event.lieu }
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
    </div>
  );
}


export default Map;