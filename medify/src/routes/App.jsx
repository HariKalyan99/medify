import './App.css'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import HealthCenterContextProvider from '../store/HealthStore'


function App() {

  return (
    <HealthCenterContextProvider>
      <Outlet />
    </HealthCenterContextProvider>
  )
}

export default App
