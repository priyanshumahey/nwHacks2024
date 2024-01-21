import { NextPage } from "next";
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { PageLayout } from "../components/page-layout";

const createEvent: NextPage = () => {
    const { user } = useUser();
    const [userId, setUserId] = React.useState("none");

    useEffect(() => {
        if (user?.sub) {
            const userId = user.sub.split("|")[1];
            console.log("User ID:", userId);
            setUserId(userId);
        }
    }, [user]);

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
                <input type="text" placeholder="Event Name" />
            </div>
            <div>
                <input type="text" placeholder="Event Title" />
            </div>
            <div>
                <input type="text" placeholder="Event Description" />
            </div>
            <div>
                <input type="text" placeholder="Event Location" />
            </div>
            <div>
                <input type="datetime-local" placeholder="Event Date" />
            </div>
            <div>
                <input type="datetime-local" placeholder="End Date" />
            </div>
            <div>
                <input type="text" placeholder="creatorId" />
            </div>
            <div>
                <input type="text" placeholder="Event Type" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default createEvent;