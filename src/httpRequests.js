// Our frontend app will use this API for all HTTP requests

// https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples
const axios = require("axios").default;
// axios.defaults.withCredentials = true;
// TODO: Cant figure this stupid fucking shit out
// Why the fuck cant i get cookies back using axios
// What the fuck is cors
// Why does everyone on stack overflow talk like a fucking
// 40 year career IT tech

// ====================================
//
// Requests to AuthServer (port 4001)
//
// ====================================

const authServer = "http://localhost:4001";

// Create new account
export const createAccount = (credentials) => {
  const URL = `${authServer}/users`;
  return (
    axios(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json", // whatever you want
      },
      data: credentials,
    })
      // .then((response) => {response.data})
      .catch((error) => {
        return error.response;
      })
  );
};

// EXAMPLE RESPONSE
// {
//     "data": "User account created!\nUsername: test\nEmail:123@123.com",
//     "status": 201,
//     "statusText": "Created",
//     "headers": {
//         "content-length": "54",
//         "content-type": "text/html; charset=utf-8"
//     },
//     "config": {
//         "transitional": {
//             "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//         },
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {
//             "FormData": null
//         },
//         "headers": {
//             "Accept": "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//         },
//         "method": "post",
//         "data": "{\"username\":\"test\",\"password\":\"123123123\",\"email\":\"123@123.com\"}",
//         "url": "http://localhost:4001/users"
//     },
//     "request": {}
// }

// Login to account
// Create new account
export const login = (credentials) => {
  const URL = `${authServer}/login`;
  return (
    axios(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json", // whatever you want
      },
      data: credentials,
    })
      // .then((response) => {response.data})
      .catch((error) => {
        return error.response;
      })
  );
};

export const loginFetch = (credentials) => {
  const URL = `${authServer}/login`;
  return (
    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json", // whatever you want
      },
      body: JSON.stringify(credentials),
    })
      // .then((response) => {response.data})
      .catch((error) => {
        return error.response;
      })
  );
};
