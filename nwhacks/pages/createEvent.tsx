import { NextPage } from "next";
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { PageLayout } from "../components/page-layout";

const createEvent: NextPage = () => {
    const { user } = useUser();
    const [userId, setUserId] = React.useState("none");
    const [eventData, setEventData] = React.useState({
        eventName: "",
        eventTitle: "",
        eventDescription: "",
        eventLocation: "",
        eventDate: "",
        endDate: "",
        creatorId: "",
        eventType: ""
    });

    useEffect(() => {
        if (user?.sub) {
            const userId = user.sub.split("|")[1];
            console.log("User ID:", userId);
            setUserId(userId);
        }
    }, [user]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEventData((prevEventData) => ({
            ...prevEventData,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log(eventData);
    }, [eventData]);

    if (!user) {
        return null;
    }

    return (
        <PageLayout>
            <div className="content-layout">
                <h1 id="page-title" className="content__title">
                    Create Event
                </h1>
                <div className="content__body">
                    <p id="page-description">
                        <span>
                            This page has your user id <strong>protected message</strong>.
                        </span>
                        <span>
                            <strong>UserId: {userId}</strong>
                        </span>
                    </p>
                    <div>
                        <input type="text" placeholder="Event Name" name="eventName" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Event Title" name="eventTitle" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Event Description" name="eventDescription" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Event Location" name="eventLocation" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="datetime-local" placeholder="Event Date" name="eventDate" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="datetime-local" placeholder="End Date" name="endDate" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="creatorId" name="creatorId" onChange={handleInputChange} />
                    </div>
                    <div>
                        <select name="eventType" onChange={handleInputChange} value={eventData.eventType || ""}>
                            <option value="">Select an event type</option>
                            <option value="task">Task</option>
                            <option value="meeting">Meeting</option>
                            <option value="reminder">Reminder</option>
                        </select>
                    </div>
                    <div>
                        <pre>{JSON.stringify(eventData, null, 2)}</pre>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default createEvent;