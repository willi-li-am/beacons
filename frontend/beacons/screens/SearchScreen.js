// Import React and necessary components from React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, FlatList, StyleSheet } from 'react-native';

// Define the component
const UserCard = ({ user }) => (
  <View style={styles.card}>
    <Text style={styles.username}>{user.name}</Text>
  </View>
);

const SearchScreen = () => {

  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const searchUsers = async () => {
    console.log(query);
    try {
      const response = await fetch(`https://beacon-9ob2.onrender.com/user/${query}`);
      setUsers(response.data);
      console.log(response.data) // assuming the response data is an array of user objects
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Search users..."
      />
      <Button title="Search" onPress={searchUsers} />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()} // Replace 'id' with the unique identifier of your user objects
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
};

// Create some basic styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCC7FF',
  },
  text: {
    fontSize: 18,
    color: '#333', // Dark grey text
  },
  input: {
    marginTop: 50,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
  },
});

// Export the component so it can be imported elsewhere
export default SearchScreen;