import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </>
  )
}

export default App
