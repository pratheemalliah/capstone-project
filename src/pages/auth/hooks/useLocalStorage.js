const useLocalStorage = () => {
  const getLocalStorage = (id) => {
    return localStorage.getItem(id);
  };

  const setLocalStorage = (id, value) => {
    localStorage.setItem(id, value);
  };

  const removeItemLocalStorage = (id) => {
    localStorage.removeItem(id);
  };

  return { getLocalStorage, setLocalStorage, removeItemLocalStorage };
};

export default useLocalStorage;
