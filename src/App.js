import "./App.scss";
import Main from "./components/authentication/Main";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";

function App() {
  // Makes screen readers work with modals
  Modal.setAppElement(document.getElementById("root"));

  // TODO: Make a request to the server, if we have a valid refresh token
  // Then we are signed in, the response should redirect us to
  // The Home page. All resources in the home page requires a valid
  // access token.

  /*
  https://stackoverflow.com/questions/64777409/should-access-tokens-be-refreshed-automatically-or-manually#:~:text=Automatically%20Refreshing&text=If%20the%20access%20token%20is,the%20response%20headers%20with%20it.
  It feels to me that you are missing a role here, which is that of the Authorization Server (AS):
    UI redirects to AS to authenticate the user via password
    AS issues an access token and refresh token, then returns them to the UI
    UI calls the API for a while with the access token
    Eventually the access token expires and the API returns a 401 response
    The UI then calls the AS with the refresh the token to get a new access token
    The UI then retries the API call with the new access token
    Eventually the refresh token expires and the refresh attempt will fail
    The UI then redirects the user to sign in again and the cycle repeats
    It is always the client's responsibility to refresh tokens and only the access token
    should be sent to the API. 
    The API's only OAuth job is verify the access token and authorize based on its contents.
  */

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
