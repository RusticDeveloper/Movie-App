import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// uso del modelo de vista stack
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Importacion de las paginas de navegacion 
import DetailScreen from './src/screens/DetailScreen';
import ImageScreen from'./src/screens/ImageScreen';
import HomeScreen from'./src/screens/HomeScreen';
import Peliculas from'./src/screens/pelis';

const Stack=createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'orange'}
      }}
      initialRouteName='App-a-Inicio'
      >
        <Stack.Screen 
        name='Inicio-a-Detalles'
        component={DetailScreen}
        options={({route})=>({title:route.params.pelicula.titulo})}
        />
        <Stack.Screen 
        name='Detalles-a-Detalles'
        component={DetailScreen}
        options={({route})=>({title:route.params.pelicula.titulo})}
        />
        <Stack.Screen 
        name='App-a-Inicio'
        component={HomeScreen}
        options={{
          title:'Hora de peliculas con jim y flaque',
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:30,
          }
        }}
        />
        <Stack.Screen 
        name='Inicio-a-Imagen'
        component={ImageScreen}
        />
        <Stack.Screen 
        name='Inicio-a-Pelicula'
        component={Peliculas}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
