import { writable } from "svelte/store";

const API = 'http://127.0.0.1:7070/api';

export const compendium = writable([]);

const getCompendium = async () => {
    const response = await fetch(`${API}/compendium`);
    const data = await response.json();
    compendium.set(data);
};
getCompendium();