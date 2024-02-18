import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import EventsScreen from './screens/eventsScreen';
import { AuthContextProvider } from './hooks/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {

  return (
    
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'person' : 'person-circle-outline'}
              size={size}
              color={'#059905'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContextProvider>
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
