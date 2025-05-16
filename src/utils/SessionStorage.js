
export const StoreInSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const GetInSessionStorage = (key) => {
  const storedValue = sessionStorage.getItem(key);
    if (!storedValue) return null;
    return storedValue;
};

export const RemoveFromSession = (key) => {
  sessionStorage.removeItem(key);
};
