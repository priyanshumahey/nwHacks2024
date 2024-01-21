import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Fetch data from the Flask server
      const response = await fetch("http://127.0.0.1:5000/get-emails", {
        method: "POST", // Assuming your Flask server expects a POST request
      });

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse the response as JSON
      const emailData = await response.json();

      // Send the data in the response of your Next.js API route
      res.status(200).json({ data: emailData });
      console.log(emailData);
    } catch (error) {
      // Handle any errors
      console.error("There was an error fetching the email data:", error);
      res.status(500).json({ error: "Failed to fetch email data" });
    }
  } else {
    // Handle any non-GET requests
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
