import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Context/stateProvider';
import reducer, { intialState} from './Context/reducer';


ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={intialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
