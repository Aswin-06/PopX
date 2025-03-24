import LandingScreen from "./components/LandingScreen"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
