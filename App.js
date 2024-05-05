import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigation/TabNavigation';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { UserLocationContext } from './App/Context/UserLocationContext';
import { useFonts } from 'expo-font';
export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [fontsLoaded, fontError] = useFonts({
    'ubuntubold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'ubuntuboldit': require('./assets/fonts/Ubuntu-BoldItalic.ttf'),
    'ubuntuit': require('./assets/fonts/Ubuntu-Italic.ttf'),
    'ubuntulight': require('./assets/fonts/Ubuntu-Light.ttf'),
    
    
  });
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
      
    })();
  }, []);

  


  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{location,setLocation}}>
    <NavigationContainer>
         <TabNavigation/>
    </NavigationContainer>
    </UserLocationContext.Provider>
    </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
