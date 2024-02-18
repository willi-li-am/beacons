import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

// Calculate a third of the screen width
const screenWidth = Dimensions.get('window').width;
const swipeThreshold = screenWidth / 3;

const EventItem = ({ event }) => {
  const renderLeftActions = () => {
    return (
      <View style={styles.swipeLeftActionContainer}>
        <TouchableOpacity style={styles.swipeAction}>
          <Text style={styles.swipeActionText}>Accept Invite</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // This function is for actions appearing from the right side (when you swipe left).
  const renderRightActions = () => {
    return (
      <View style={styles.swipeRightActionContainer}>
        <TouchableOpacity style={styles.swipeAction}>
          <Text style={styles.swipeActionText}>Decline Invite</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      leftThreshold={swipeThreshold} // Distance to drag for triggering left action
      rightThreshold={swipeThreshold} // Distance to drag for triggering right action
    >
      <View style={styles.eventBlock}>
        <View style={styles.inviteBox}>
          <Text style={styles.inviteText}>{event.author_id} invites you to</Text>
        </View>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDetails}>{event.location}, {event.time}</Text>
          <Text style={styles.eventDescription}>{event.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonGoing}>
              <Text style={styles.buttonText}>Ppl going</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNotGoing}>
              <Text style={styles.buttonText}>ppl Not Going</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const EventsScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a backend
    // Replace this with your actual data fetching logic
    const fetchEvents = async () => {
      try {
        // Example: const response = await fetch('https://yourbackend.com/api/events');
        // const data = await response.json();
        // For demonstration, using static data; replace this with fetched data
        setEvents([
          // Your dynamic events data here
          // This is where your fetched data will be set
        ]);
      } catch (error) {
        Alert.alert('Error', 'Could not fetch events');
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Beacons</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }} // Added padding at the bottom for better scrolling
      >
        {events.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
  container: {
    backgroundColor: '#C8BFFF',
  },
  headerContainer: {
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: '#C8BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Continue with your existing styles...
});

export default EventsScreen;
