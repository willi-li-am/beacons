const Event = require('../models/event.model')

const getEvent = async ( event_id ) => {
    try {
        // Use findById to fetch the event
        const event = await Event.findById(event_id);
    
        if (!event) {
          console.log('Event not found');
          return null; // Or handle as appropriate for your application
        }
    
        console.log('Event found:', event);
        return event;
    } catch (error) {
        console.error('Error retrieving event:', error);
        throw error; // Or handle as appropriate for your application
    }
}

const getInvitedEvents = async (userId) => {
    try {
      // Use find to fetch events where the user's ID is in the invited list
      const events = await Event.find({ invited: userId });
  
      if (events.length === 0) {
        console.log('No events found for this user.');
        return []; // Or handle as appropriate for your application
      }
  
      console.log('Found events:', events);
      return events;
    } catch (error) {
      console.error('Error retrieving invited events:', error);
      throw error; // Or handle as appropriate for your application
    }
  };
  
  const createEvent = async ( body ) => {
    const author = body.author_id
    const date_expected = body.date_expected
    const location = body.location
    const title = body.title
    const description = body.description
    const status = body.status
    const invited = body.invited //idk i fi need this but im just adding it

    if (!(author && location && title && description && status && invited)) {
        throw new Error("Incorect Input")
    }

    const newEvent = new Event ()
    newEvent.date_expected = date_expected
    newEvent.author = author
    newEvent.location = location
    newEvent.title = title
    newEvent.description = description
    newEvent.status = status
    newEvent.invited = invited

    return await newEvent.save()
}

const acceptEvent = async ( Event, user ) => {
    // Find the event by its ID
    const event = await Event.findById(eventId);

    if (!event) {
        throw new Error('Event not found');
    }

    // Check if the user is in the invited list
    if (!event.invited.includes(userId) && !event.accepted.includes(userId)) {
        throw new Error('User was not invited to or has not accepted this event');
    }

    // Add the user to the accepted list if they are not already in it
    if (!event.accepted.includes(userId)) {
        event.accepted = event.accepted.filter(user => user !== userId);
    }

    // Remove the user from the declined list if they are there
    if (event.declined.includes(userId)) {
        event.declined.push(userId);
    }

    // Save the updated event
    return await event.save();
}

const rejectEvent = async ( Event, user ) => {
    // Find the event by its ID
    const event = await Event.findById(eventId);

    if (!event) {
        throw new Error('Event not found');
    }

    // Check if the user is in the invited list
    if (!event.invited.includes(userId) && !event.accepted.includes(userId)) {
        throw new Error('User was not invited to or has not accepted this event');
    }

    // Remove the user from the accepted list if they are there
    if (event.accepted.includes(userId)) {
        event.accepted = event.accepted.filter(user => user !== userId);
    }

    // Add the user to the declined list if they are not already in it
    if (!event.declined.includes(userId)) {
        event.declined.push(userId);
    }

    // Save the updated event
    return await event.save();
};

module.exports = {getEvent, getInvitedEvents, createEvent, acceptEvent, rejectEvent}