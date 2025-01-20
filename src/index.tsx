import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
ModuleRegistry.registerModules([AllCommunityModule]);

root.render(
  <React.StrictMode>
    <App/>
    </React.StrictMode>
);

