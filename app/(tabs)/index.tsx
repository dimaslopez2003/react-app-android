import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedText from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createStackNavigator } from '@react-navigation/stack';
import DimasScreen from './Dimas';
import { Noticias } from '@/components/Noticias';
import { Button, Icon } from 'react-native-elements';
import { Card } from 'react-native-elements';
import Form from '@/components/Formulario';

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={ThemedText}/>
      <Stack.Screen name="Dimas" component={DimasScreen} options = {{headerShown: false }}  />
      <Stack.Screen name="Noticias" component={Noticias}options = {{headerShown: false }} />
      <Stack.Screen name="Formulario" component={Form} options = {{headerShown: false }} />


    </Stack.Navigator>
  );
}

