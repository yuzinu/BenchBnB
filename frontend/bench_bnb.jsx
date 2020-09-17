import React from "react";
// import ReactDOM from "react-dom";
// import configureStore from "./store/store";
// import { postUser, postSession, deleteSession} from "./util/session";

// document.addEventListener("DOMContentLoaded", () => {

//     window.postSession = postSession;
//     window.postUser = postUser;
//     window.deleteSession = deleteSession;

//     const store = configureStore();
//     window.getState = store.getState;
//     window.dispatch = store.dispatch;
  
//     const root = document.getElementById("root");
//     ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
// });

import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});