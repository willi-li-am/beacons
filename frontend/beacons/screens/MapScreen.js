import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Button, TextInput, Modal, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
      const [markers, setMarkers] = useState([]);

    const handleMapPress = (e) => {
      const { coordinate } = e.nativeEvent;
      const newMarker = {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        title: "New Marker",
        description: "This is a new marker.",
      };
      setMarkers([...markers, newMarker]);
    };
  
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  
  export default MapScreen;