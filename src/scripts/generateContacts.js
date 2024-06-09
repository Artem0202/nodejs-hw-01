import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let dbData = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      dbData.push(createFakeContact());
    }
    const generate = await fs.writeFile(
      PATH_DB,
      JSON.stringify(dbData),
      'utf-8',
    );
  } catch (err) {
    console.error('Error:', err);
  }
};

await generateContacts(5);
