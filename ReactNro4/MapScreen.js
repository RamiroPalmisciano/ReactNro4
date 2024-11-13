import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: -34.6037,
                longitude: -58.3816,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}>
            <Marker coordinate={{ latitude: -34.6037, longitude: -58.3816 }} title="Partido" />
        </MapView>
    );
};

export default MapScreen;
