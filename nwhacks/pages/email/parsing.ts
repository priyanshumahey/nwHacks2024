import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import * as base64 from "base-64";

const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
const TOKEN_PATH = "token.json";

const CLIENT_ID =
  "176994411777-mc30qsurtuvig26002k5odinmoij73tn.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:4040/";

// Initialize OAuth2Client with your credentials
const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Function to get authenticated Gmail service
async function getGmailService(oAuth2Client: OAuth2Client): Promise<any> {
  // Load client secrets, authenticate and get an OAuth2 client
  // ... (omitted for brevity, refer to the previous example)

  return google.gmail({ version: "v1", auth: oAuth2Client });
}

async function listMessages(
  service: any,
  userId: string,
  query: string
): Promise<void> {
  const response = await service.users.messages.list({
    userId,
    labelIds: ["INBOX"],
    q: query,
  });

  const messages = response.data.messages;
  if (!messages || messages.length === 0) {
    console.log("You have no New Messages.");
    return;
  }

  let messageCount = 0;
  for (const message of messages) {
    const msg = await service.users.messages.get({
      userId,
      id: message.id,
    });

    messageCount++;
    const emailData = msg.data.payload.headers;
    const fromName = emailData.find(
      (header: any) => header.name === "From"
    )?.value;
    console.log(fromName);

    const subject = emailData.find(
      (header: any) => header.name === "Subject"
    )?.value;
    console.log(subject);

    // Check for message parts and decode
    if (msg.data.payload.parts) {
      for (const part of msg.data.payload.parts) {
        if (["text/plain", "text/html"].includes(part.mimeType)) {
          const data = base64.decode(
            part.body.data.replace(/-/g, "+").replace(/_/g, "/")
          );
          console.log(data);
        }
      }
    }
  }
}

async function main() {
  const service = await getGmailService(oAuth2Client);
  await listMessages(service, "me", "from:specificemail@example.com is:unread");
}

main().catch(console.error);
