import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './routes/App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchResultsPage from './pages/SearchResultsPage';
import MyBookingsPage from './pages/MyBookingsPage';


const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <LandingPage />},
    {path: "/search-results", element: <SearchResultsPage />},
    {path: "/bookings", element: <MyBookingsPage />}
  ]}
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
