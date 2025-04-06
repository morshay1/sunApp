import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './.expo/app/screens/MapScreen';
import WelcomeScreen from './.expo/app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name='WelcomeScreen' 
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen 
            name='MapScreen' 
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
