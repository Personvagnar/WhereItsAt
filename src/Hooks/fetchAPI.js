const EVENTS_URL = 'https://santosnr6.github.io/Data/events.json';

export async function fetchAPI() {
  try {
    const response = await fetch(EVENTS_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}
