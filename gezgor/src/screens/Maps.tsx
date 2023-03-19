
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const Maps = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <MapView
    style={{
      height: windowHeight,
      marginBottom: -30
    }}
    initialRegion={{
      latitude: 40.55794260068981,
      longitude: 49.69755334457113,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    
  >

    <Marker
      coordinate={{
        latitude: 40.55794260068981,
        longitude: 49.69755334457113
      }}
      title={"aa"}
      description={"bbbbbbbbb"}
    >
    </Marker>

  </MapView>
  )
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