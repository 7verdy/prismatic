const API = 'localhost:7070/api/';
/**
 * @type {never[]}
 */
export let areas = [];
/**
 * @type {never[]}
 */
export let sets = [];

export async function getAreas() {
  const response = await fetch(`${API}/areas`);
  const data = await response.json();
  areas = data;
}

export async function getSets() {
  const response = await fetch(`${API}/sets`);
  const data = await response.json();
  sets = data;
}

/**
 * @param {object} body
 */
export async function getStats(body) {
  const response = await fetch(`${API}/stats`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
}