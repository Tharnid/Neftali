import { useEffect, useState } from "react";

import MeetupList from "../components/Meetup/MeetupList";

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true); // useState returns an array of two elements
                                                    // first element = current state snapshot
                                                    // second element = function changing state
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => { // first is a function, 2nd is an array of dependencies
    fetch('https://react-course-meetup-74f5d-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json(); // returns a promise
    }).then(data => {
                              // then return the data as an array of meetups...js does not wait for promise to complete
                              //...not good to use async / await
                              // loading spinner
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key] // spread operator copies all keys
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups); // state loading functions are an exception
  
  }, []); // no external dependencies...only runs when component loads


    if (isLoading) {
      return (
        <section>
          <p>Is Loading....</p>
        </section>
      )
    }
  });  

    return (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />  
        </section>
    );
}

export default AllMeetupsPage;