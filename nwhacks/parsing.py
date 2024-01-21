# # import the required libraries 
# import Flask
# from googleapiclient.discovery import build 
# from google_auth_oauthlib.flow import InstalledAppFlow 
# from google.auth.transport.requests import Request 
# import pickle 
# import os.path 
# import base64 
# import email 
# from bs4 import BeautifulSoup 

# # Define the SCOPES. If modifying it, delete the token.pickle file. 
# SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'] 

# def getEmails(): 
#     creds = None
#     if os.path.exists('token.pickle'): 
#         with open('token.pickle', 'rb') as token: 
#             creds = pickle.load(token) 

#     if not creds or not creds.valid: 
#         if creds and creds.expired and creds.refresh_token: 
#             creds.refresh(Request()) 
#         else: 
#             flow = InstalledAppFlow.from_client_secrets_file(
#                 'credentials.json', 
#                 SCOPES, 
#                 redirect_uri='http://localhost:8080/'
#             )
#             creds = flow.run_local_server() 

#         with open('token.pickle', 'wb') as token: 
#             pickle.dump(creds, token) 

#     service = build('gmail', 'v1', credentials=creds) 
#     result = service.users().messages().list(userId='me').execute() 
#     messages = result.get('messages') 

#     for msg in messages: 
#         txt = service.users().messages().get(userId='me', id=msg['id']).execute() 
#         try: 
#             payload = txt['payload'] 
#             headers = payload['headers'] 

#             subject = ''
#             sender = ''
#             for d in headers: 
#                 if d['name'] == 'Subject': 
#                     subject = d['value'] 
#                 if d['name'] == 'From': 
#                     sender = d['value'] 

#             parts = payload.get('parts')[0] 
#             data = parts['body']['data'] 
#             data = data.replace("-","+").replace("_","/") 
#             decoded_data = base64.b64decode(data) 

#             soup = BeautifulSoup(decoded_data , "lxml") 
#             body = soup.body.get_text() 

#             print("Subject: ", subject) 
#             print("From: ", sender) 
#             print("Message: ", body) 
#             print('\n') 
#         except: 
#             pass


# getEmails()

from flask import Flask, request, jsonify
from googleapiclient.discovery import build 
from google_auth_oauthlib.flow import InstalledAppFlow 
from google.auth.transport.requests import Request 
import pickle 
import os.path 
import base64 
import email 
from bs4 import BeautifulSoup 

app = Flask(__name__)

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def getEmails(): 
    creds = None
    if os.path.exists('token.pickle'): 
        with open('token.pickle', 'rb') as token: 
            creds = pickle.load(token) 

    if not creds or not creds.valid: 
        if creds and creds.expired and creds.refresh_token: 
            creds.refresh(Request()) 
        else: 
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', 
                SCOPES, 
                redirect_uri='http://localhost:8080/'
            )
            creds = flow.run_local_server() 

        with open('token.pickle', 'wb') as token: 
            pickle.dump(creds, token) 

    service = build('gmail', 'v1', credentials=creds) 
    result = service.users().messages().list(userId='me').execute() 
    messages = result.get('messages') 

    email_details = []
    for msg in messages: 
        txt = service.users().messages().get(userId='me', id=msg['id']).execute() 
        try: 
            payload = txt['payload'] 
            headers = payload['headers'] 

            subject = ''
            sender = ''
            for d in headers: 
                if d['name'] == 'Subject': 
                    subject = d['value'] 
                if d['name'] == 'From': 
                    sender = d['value'] 

            parts = payload.get('parts')[0] 
            data = parts['body']['data'] 
            data = data.replace("-","+").replace("_","/") 
            decoded_data = base64.b64decode(data) 

            soup = BeautifulSoup(decoded_data , "lxml") 
            body = soup.body.get_text() 

            email_details.append({
                "subject": subject,
                "sender": sender,
                "message": body
            })
        except: 
            pass

    return email_details

@app.route('/get-emails', methods=['POST'])
def handle_get_emails():
    if request.method == 'POST':
        emails = getEmails()
        return jsonify(emails)

if __name__ == '__main__':
    app.run(debug=True)
