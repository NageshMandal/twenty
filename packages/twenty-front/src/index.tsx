import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// eslint-disable-next-line @nx/enforce-module-boundaries
import store from './store'; // Path to Redux store
import { App } from '@/app/components/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') ?? document.body,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
