import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import your screens
import LoginScreen from './screens/loginScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/profileScreen';
import SearchScreen from './screens/SearchScreen';
import FriendsScreen from './screens/FriendsScreen';
import EventsScreen from './screens/eventsScreen';

// Define any additional screens you have
// ...

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 10, // Raise the button from the bottom
        left: '50%', // Position at the half of the screen width
        right: '50%', // Also position from the right half
        transform: [{ translateX: -35 }], // Adjust the position to truly center based on the button width
        ...shadowStyle,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#C8BFFF',
          alignItems: 'center', // This ensures that the icon inside is centered
          justifyContent: 'center', // This ensures that the icon inside is centered
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: styles.tabBar,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Events') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        } else if (route.name === 'Create') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'Login') { // Assuming 'Login' is another tab for illustration
          iconName = focused ? 'person' : 'person-outline';
        }
        else if (route.name === 'Profile') { // Assuming 'Login' is another tab for illustration
          iconName = focused ? 'person' : 'person-outline';
        }
        else if (route.name === 'Friends') { // Assuming 'Login' is another tab for illustration
          iconName = focused ? 'person' : 'person-outline';
        }
        else if (route.name === 'Search') { // Assuming 'Login' is another tab for illustration
          iconName = focused ? 'person' : 'person-outline';
        }
        // Add more icons for other tabs if necessary
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    initialRouteName="Events"
  >
    {/* Order of Tab.Screen components determines their order on the screen */}
    {/* First tab (left-most) */}
    <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'Login' }} />
    {/* Middle tab */}
    <Tab.Screen
      name="Create"
      component={MapScreen}
      options={{
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: 'Create',
      }}
    />
    {/* Last tab (right-most) */}
    <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarLabel: 'Events' }} />
    <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: 'Search'}} />
    {/* ... other tabs if you have more */}
    <Tab.Screen name="Friends" component={FriendsScreen} options={{ tabBarLabel: 'Friends'}} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile'}} />
    
  </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TabNavigator"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const shadowStyle = {
  shadowColor: '#7F5DF0',
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
    ...shadowStyle,
  },
});
