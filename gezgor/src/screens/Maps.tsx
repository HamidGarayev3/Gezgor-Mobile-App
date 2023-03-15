
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const Maps = () => {
  interface MapPickerProps {
    onLocationSelected: (location: { latitude: number; longitude: number }) => void;
  }
  
  const MapPicker: React.FC<MapPickerProps> = ({ onLocationSelected }) => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [mapRegion, setMapRegion] = useState<Region>({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  
    useEffect(() => {
      if (location) {
        onLocationSelected(location);
      }
    }, [location, onLocationSelected]);
  
    const handleRegionChange = (region: Region) => {
      setMapRegion(region);
    };
  
    const handleMapPress = (event: MapView.MapEvent) => {
      setLocation({
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
      });
    };
  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={mapRegion}
      onRegionChangeComplete={handleRegionChange}
      onPress={handleMapPress}
    >
      {location && (
        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
      )}
    </MapView>
    <TouchableOpacity style={styles.button} onPress={() => setLocation(null)}>
      <Text style={styles.buttonText}>Reset</Text>
    </TouchableOpacity>
  </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});


export default Maps