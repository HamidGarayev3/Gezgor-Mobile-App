
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
        latitude: 40.34435607170294,
        longitude: 49.85091664584706
      }}
      title={"Crystal Hall"}
      description={"Concert Events"}
    >
    </Marker>
    <Marker
      coordinate={{
        latitude: 40.339218239744305, 
        longitude: 49.841422115965635
      }}
      title={"Elektra Events Hall"}
      description={"Concert Events"}
    >
    </Marker>

    <Marker
      coordinate={{
        latitude: 40.35986062278685,  
        longitude: 49.8360901489277
      }}
      title={"Azerbaijan National Carpet Museum"}
      description={"Museums"}
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