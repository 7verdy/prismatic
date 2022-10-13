const API = 'localhost:7070/api/';

/**
 * @param {object} body
 */
async function getStats(body) {
  const response = await fetch(`${API}/stats`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
}