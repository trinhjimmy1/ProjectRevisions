import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ArrayState from "./pages/ArrayState.jsx";
import Users from "./pages/Users.jsx";
import LifeCycles from "./pages/LifeCycles.jsx";
import Films from "./pages/Films.jsx";
import LiftingStateUp from "./pages/LiftingStateUp.jsx";
import Converter from "./pages/Converter.jsx";
import Slider from "./pages/Slider.jsx";
import Borne from "./pages/Borne.jsx";
function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/arraystate" element={<ArrayState/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/lifecycles" element={<LifeCycles/>}/>
              <Route path="/films" element={<Films/>}/>
              <Route path="/liftingstateup" element={<LiftingStateUp/>}/>
              <Route path="/converter" element={<Converter/>}/>
              <Route path="/slider" element={<Slider/>}/>
              <Route path="/borne" element={<Borne/>}/>
          </Routes>
      </>
  )
}

export default App;
