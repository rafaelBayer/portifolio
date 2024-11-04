import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Router from './routes/Router';
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
    <Analytics />
  </React.StrictMode>
);

