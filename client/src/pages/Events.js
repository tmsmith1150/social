import React, { useState, useEffect } from "react"; 
import EventCard from "../components/EventCard";
import API from "../utils/API";

function Event() {
  // Setting our component's initial state
  // const [events, setEvents] = useState([]);

  // // load all events when the page renders
  // useEffect(() => {
  //   loadEvents()
  // }, []);

  //   // function to do a get request from the database
  // function loadEvents() {
  //   API.getEvents()
  //     .then(res => 
  //       console.log(res),
  //       setEvents(res)
  //     )
  //       .catch(err => console.log(err));
  // };

const [testEvents, setTestEvents] = useState([]);

  useEffect(() => {
    loadTestEvents()
  }, []);
  
  function loadTestEvents() {
    const res = API.getTestEvents()
        console.log(res)
        setTestEvents(res)
      
  };
//  API.getTestEvents = id => {
//     const events = events.map(event => event.id !== id);
//     // Set this.state.friends equal to the new friends array
//     setTestEvents(events)
//   }

  return(
    <div>
       {testEvents.map(event => (
          <EventCard
            id={event.id}
            key={event.id}
            name={event.eventName}
            image={event.image}
            location={event.location}
            description={event.description}
            date={event.date}
            time={event.time}
          />
        ))}
    </div>
  )
}

export default Event; 
