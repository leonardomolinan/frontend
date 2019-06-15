const responseFromServer = {
  token: "HALKJSDH8A7hd98o81273"
};

const originalToken = {
  token: "HALKJSDH8A7hd98o81273"
};

const getResponse = () => {
  return responseFromServer.token;
};

const getOriginalToken = () => {
  return originalToken.token;
};

const compareToken = () => {
  if (getResponse() === getOriginalToken()) return true;
  else return false;
};

export const setToken = () => {
  localStorage.setItem("token", { getResponse });
};

export const isAuthenticated = () => {
  if (localStorage.getItem("token")) {
    if (compareToken() === true) return true;
  } else {
    return false;
  }
};
