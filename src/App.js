import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store";
import Users from './views/Users'

function App() {
  return (
      <Provider store={store}>
        <div className="body">
        <Users />
        </div>
      </Provider>
  );
}

export default App;
