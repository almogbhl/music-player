import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

