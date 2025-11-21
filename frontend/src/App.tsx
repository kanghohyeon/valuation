import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './css/App.css'
import AppRoute from "./routes/AppRoute.tsx";
import "./css/common.css";

function App() {
  return (
      <div className="app-wrapper">
          <BrowserRouter>
              <AppRoute/>
              <ToastContainer position={"top-center"}/>
          </BrowserRouter>
      </div>
  )
}

export default App
