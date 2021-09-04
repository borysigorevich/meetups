import React, {useRef} from 'react';
import classes from './NewMeetupForm.module.css'
import Card from "../ui/Card";

const NewMeetupForm = (props) => {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor={'title'}>Meetup Title</label>
                    <input ref={titleInputRef} type="text" required id={'title'}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'image'}>Meetup Image</label>
                    <input ref={imageInputRef} type="url" required id={'image'}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'address'}>Meetup Address</label>
                    <input ref={addressInputRef} type="text" required id={'address'}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'description'}>Meetup Description</label>
                    <textarea ref={descriptionInputRef} rows={5} required id={'description'}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;