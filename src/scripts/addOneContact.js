import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let dbData = JSON.parse(data);
    dbData.push(createFakeContact());
    const addContact = await fs.writeFile(
      PATH_DB,
      JSON.stringify(dbData),
      'utf-8',
    );
  } catch (err) {
    console.error('Error:', err);
  }
};

await addOneContact();
