import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App';

import {setupStore} from "./store";
import { Provider } from 'react-redux'

const store=setupStore()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);


