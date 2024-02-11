import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './routes/router';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);
