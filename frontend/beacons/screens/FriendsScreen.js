// Import React and necessary components from React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the component
const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a blank screen for testing</Text>
    </View>
  );
};

// Create some basic styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light grey background
  },
  text: {
    fontSize: 18,
    color: '#333', // Dark grey text
  },
});

// Export the component so it can be imported elsewhere
export default FriendsScreen;