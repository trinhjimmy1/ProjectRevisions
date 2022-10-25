import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ArrayState from "./pages/ArrayState.jsx";
import Users from "./pages/Users.jsx";
function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/arraystate" element={<ArrayState/>}/>
              <Route path="/users" element={<Users/>}/>
          </Routes>
      </>
  )
}

export default App
