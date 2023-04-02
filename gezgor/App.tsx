import { View, Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import Navigator from './src/navigation';



const App = () => {
  return (
    <NavigationContainer>
    <View style={{
      flex: 1
    }}>
      <Navigator />
    </View>
  </NavigationContainer>
  )
}

export default App