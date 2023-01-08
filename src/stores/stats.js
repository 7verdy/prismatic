import { writable } from "svelte/store";

const API = 'http://127.0.0.1:7070/api';

export const areas = writable([]);
export const gears = writable([]);

const getAreas = async () => {
  const response = await fetch(`${API}/areas`);
  const data = await response.json();
  const areasFetched = data['areas'];
  areas.set(areasFetched);
};
// getAreas();

const getGears = async () => {
  const response = await fetch(`${API}/gears`);
  const data = await response.json();
  gears.set(data);
}
getGears();