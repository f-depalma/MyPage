import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactMe from './component/contact-me/ContactMe';
import Home from './component/home/Home';
import Header from './component/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Header />
        <Home />
      </div>,
  },
  {
    path: "/contact-me",
    element: <div>
      <Header />
      <ContactMe />
    </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
