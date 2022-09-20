import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/navBar/NavBar"
import Dashboard from "./components/dashboard/Dashboard"
import ReactBootStrapForm from "./components/ReactBootStrapForm"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticketForm" element={<ReactBootStrapForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
