import apiFetch from "./apiFetch";
import useLocalStorage from "pages/auth/hooks/useLocalStorage";

const { getLocalStorage, setLocalStorage, removeItemLocalStorage } =
  useLocalStorage();

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", {
    username,
    password,
  });

export const createSession = ({ username, password }) =>
  apiFetch("POST", "/users/session", {
    username,
    password,
  });

const CAPSTONE_SESSION_STORAGE_KEY = "capstone_session_token";

export const setSessionTokenStorage = (capstoneSessionToken) =>
  setLocalStorage(CAPSTONE_SESSION_STORAGE_KEY, capstoneSessionToken);

export const getSessionTokenStorage = () =>
  getLocalStorage(CAPSTONE_SESSION_STORAGE_KEY);

export const removeSessionTokenStorage = () =>
  removeItemLocalStorage(CAPSTONE_SESSION_STORAGE_KEY);
