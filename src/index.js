import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import AccountStore from './store/AccountStore';
import FilmsStore from './store/FilmsStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    film: new FilmsStore(),
    account: new AccountStore()
  }}>
      <App />
  </Context.Provider>,
);


