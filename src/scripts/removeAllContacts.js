import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
  } catch (err) {
    console.error('Error:', err);
    return err;
  }
};

await removeAllContacts();
