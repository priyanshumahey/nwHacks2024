import { db } 
from '@/lib/db/index';
import "dotenv/config";
import {
    user,
    inviteList,
    event } from './schema';

const readline = require('readline');

if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env");


const main = async () => {
    await db.delete(event);
    await db.delete(inviteList);
    await db.delete(user);
    console.log("Tables dropped and created.");
    process.exit(0);
}

main();