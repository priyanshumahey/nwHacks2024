"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var googleapis_1 = require("googleapis");
var google_auth_library_1 = require("google-auth-library");
var base64 = require("base-64");
var SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
var TOKEN_PATH = "token.json";
var CLIENT_ID = "176994411777-mc30qsurtuvig26002k5odinmoij73tn.apps.googleusercontent.com";
var CLIENT_SECRET = "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";
var REDIRECT_URI = "http://localhost:4040/";
// Initialize OAuth2Client with your credentials
var oAuth2Client = new google_auth_library_1.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// Function to get authenticated Gmail service
function getGmailService(oAuth2Client) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Load client secrets, authenticate and get an OAuth2 client
            // ... (omitted for brevity, refer to the previous example)
            return [2 /*return*/, googleapis_1.google.gmail({ version: "v1", auth: oAuth2Client })];
        });
    });
}
function listMessages(
//This function takes a Gmail service instance, a user ID, and a query, then lists the messages that match the query.
//The service.users.messages.list method is called to get a list of messages that match the query.
//Each message is then individually retrieved using service.users.messages.get.
//The message sender (From) and subject (Subject) are extracted from the message headers.
//If the message has parts (like multipart emails with different content types),
//it decodes the text/plain or text/html parts from Base64 to readable format.
service, userId, query) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var response, messages, messageCount, _i, messages_1, message, msg, emailData, fromName, subject, _c, _d, part, data;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, service.users.messages.list({
                        userId: userId,
                        labelIds: ["INBOX"],
                        q: query,
                    })];
                case 1:
                    response = _e.sent();
                    messages = response.data.messages;
                    if (!messages || messages.length === 0) {
                        console.log("You have no New Messages.");
                        return [2 /*return*/];
                    }
                    messageCount = 0;
                    _i = 0, messages_1 = messages;
                    _e.label = 2;
                case 2:
                    if (!(_i < messages_1.length)) return [3 /*break*/, 5];
                    message = messages_1[_i];
                    return [4 /*yield*/, service.users.messages.get({
                            userId: userId,
                            id: message.id,
                        })];
                case 3:
                    msg = _e.sent();
                    messageCount++;
                    emailData = msg.data.payload.headers;
                    fromName = (_a = emailData.find(function (header) { return header.name === "From"; })) === null || _a === void 0 ? void 0 : _a.value;
                    console.log(fromName);
                    subject = (_b = emailData.find(function (header) { return header.name === "Subject"; })) === null || _b === void 0 ? void 0 : _b.value;
                    console.log(subject);
                    // Check for message parts and decode
                    if (msg.data.payload.parts) {
                        for (_c = 0, _d = msg.data.payload.parts; _c < _d.length; _c++) {
                            part = _d[_c];
                            if (["text/plain", "text/html"].includes(part.mimeType)) {
                                data = base64.decode(part.body.data.replace(/-/g, "+").replace(/_/g, "/"));
                                console.log(data);
                            }
                        }
                    }
                    _e.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var service;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getGmailService(oAuth2Client)];
                case 1:
                    service = _a.sent();
                    return [4 /*yield*/, listMessages(service, "me", "from:specificemail@example.com is:unread")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
