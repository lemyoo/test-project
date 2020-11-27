import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store";
import Users from './views/Users'

function App() {
  return (
      <Provider store={store}>
        <Users />
      </Provider>
  );
}

export default App;
