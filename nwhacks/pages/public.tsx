import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { METHODS } from "http";

const Public: NextPage = () => {
  const [emails, setEmails] = useState(""); //this will show a single email
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch emails
  const fetchEmails = async () => {
    try {
      axios.get("http://localhost:4040/api/email").then(function (response) {
        console.log(response.data);
        setEmails(emails);
        return response.data;
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching emails:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Polling interval - for example, 60000 ms (60 seconds)
    const interval = setInterval(fetchEmails, 2000);

    // Initial fetch
    fetchEmails();
    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading emails...</div>;
  }
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Public Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            This page retrieves a <strong>public message</strong>. Any visitor
            can access this page.
          </p>
          {emails ? (
            <div>
              <h3>Email Details</h3>
              <p>
                <strong>Subject: {emails}</strong>
              </p>
              {/* <p>
                <strong>From:</strong> {emails.sender}
              </p>
              <p>{emails.message}</p> */}
            </div>
          ) : (
            <p>No new emails.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Public;
