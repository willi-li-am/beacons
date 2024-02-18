// Import React and necessary components from React Native
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import ProfileAvatar from '../modules/avatar';
import axios from 'axios';


// Define the component
const getAllUsers = async () => {
  const response = await axios.get(
    `https://beacon-9ob2.onrender.com/user/all`, // Replace with your actual backend API
  );
  return response.data
}
const FriendsScreen = ({route}) => {
  const {currentUser} = route.params
  const [users, setUsers] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      getAllUsers()
      .then((data) => {setUsers(() => [...data]); console.log(data)})
      .catch((err) => console.log(err))
    }
  },[isFocused])
  return (
    <View style={styles.container}>
      {users.map((user) => {
        return(
        <View>
        <ProfileAvatar size={30} name={user.name}></ProfileAvatar>
        <Text style={{}}>{user.name}</Text>
        </View>
        )
      })}
    </View>
  );
};

// Create some basic styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8BFFF', // Light grey background
  },
  text: {
    fontSize: 18,
    color: '#333', // Dark grey text
  },
});

// Export the component so it can be imported elsewhere
export default FriendsScreen;