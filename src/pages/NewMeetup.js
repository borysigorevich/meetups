import React from 'react';
import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const history = useHistory()
    console.log(history)
    const addMeetupHandler = (meetupData) => {
        fetch('https://react-crash-course-acade-fb4d5-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/data'
                }
            }).then(() => {
                history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
};

export default NewMeetup;