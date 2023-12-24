import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import route from './Component/Route/route.jsx';
import AuthProvider from './Component/Page/Authentication/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>,
)
