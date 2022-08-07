/**
 * Рвбота с локальным хранилищем
 */

export const loadState = <T>(stateName: string) => {
  try {
    const serializedState = localStorage.getItem(stateName);

    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState) as T;
  } catch (err) {
    return undefined;
  }
};

export const saveState = <T>(stateName: string, value: T) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    throw new Error("Can't save changes in local storage");
  }
};

export const removeState = (stateName: string) => {
  localStorage.removeItem(stateName);
};
  