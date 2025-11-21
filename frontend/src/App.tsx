import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css'
import AppRoute from "./routes/AppRoute.tsx";

function App() {
  return (
      <BrowserRouter>
          <AppRoute/>
          <ToastContainer position={"top-center"}/>
      </BrowserRouter>
  )
}

export default App
