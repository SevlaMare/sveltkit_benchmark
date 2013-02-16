import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  const URL = 'http://localhost:3000/projects';
  const RESPONSE = await fetch(URL);
  const DATA = await RESPONSE.json();

  if (DATA.length) {
    return {
      title: 'Home',
      projects: DATA,
    };
  }

  throw error(RESPONSE.status, 'No data retrieve from server');
}
