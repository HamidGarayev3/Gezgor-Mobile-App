import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Explore from './Explore';
const Splash = ({navigation}:any) => {
  useEffect(() => {
    setTimeout(() => {
 
            navigation.navigate('Explore')

    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{uri:'https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>GezGor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Splash;
