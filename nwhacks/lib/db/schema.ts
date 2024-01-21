import { mysqlTable, serial, text, varchar, int } from 'drizzle-orm/mysql-core'
import { relations } from "drizzle-orm";

export const user = mysqlTable('user', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
})

export const inviteList = mysqlTable('invite_list', {
  id: serial('id').primaryKey(),
  eventId: int('event_id'),
  userId: int('user_id'),
});

export const event = mysqlTable('event', {
  id: serial('id').primaryKey().autoincrement(),
  title: text('title'),
  description: text('description'),
  location: text('location'),
  startTime: text('start_time'),
  endTime: text('end_time'),
  creatorId: int('creator_id'),
  inviteList: int('invite_list'),//.references(() => inviteList.id)
  type: text('type'),
});