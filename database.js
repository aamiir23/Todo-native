import * as SQLite from 'expo-sqlite';

// Open the SQLite database
const db = SQLite.openDatabaseAsync('myDatabase.db');

// Function to create necessary tables
const createTables = async () => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    );
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      groupId INTEGER,
      text TEXT,
      completed INTEGER
    );
  `);
};

// Function to load groups from the database
const loadGroups = async () => {
  const allGroups = await db.getAllAsync('SELECT * FROM groups');
  return allGroups;
};

// Function to create a new group
const createGroup = async (name) => {
  const result = await db.runAsync('INSERT INTO groups (name) VALUES (?)', name);
  return result.lastInsertRowId; // Return the ID of the newly created group
};

// Function to delete a group
const deleteGroup = async (groupId) => {
  await db.runAsync('DELETE FROM groups WHERE id = ?', groupId);
};

export { createTables, loadGroups, createGroup, deleteGroup };