import { text, integer, pgTable, varchar, jsonb } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: integer('id').primaryKey(),
  content: varchar('content').notNull(),  // Use varchar instead of text
  chatId: varchar('chatId').notNull(),
  messageId: varchar('messageId').notNull(),
  role: varchar('type', { enum: ['assistant', 'user'] }),  // Enum type with varchar
  metadata: jsonb('metadata'),  // Use jsonb for JSON data
});

export const chats = pgTable('chats', {
  id: varchar('id').primaryKey(),
  title: varchar('title').notNull(),
  createdAt: varchar('createdAt').notNull(),
  focusMode: varchar('focusMode').notNull(),
});
