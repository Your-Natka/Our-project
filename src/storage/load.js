export const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Error reading from localStorage:', error.message);
    return undefined; // Returns undefined so our app doesn't crash if data is corrupted
  }
};
