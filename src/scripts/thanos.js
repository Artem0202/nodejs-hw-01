import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let dbData = JSON.parse(data);
    const savedContacts = dbData
      .map((contcat) => {
        if (Math.random() >= 0.5) {
          return contcat;
        }
      })
      .filter((contcat) => contcat !== undefined);
    const contactsList = await fs.writeFile(
      PATH_DB,
      JSON.stringify(savedContacts),
      'utf-8',
    );
  } catch (err) {
    console.error('Error:', err);
  }
};

await thanos();
