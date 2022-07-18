import About from "./screens/about/About"
import Home from "./screens/home/Home"
import NewBook from "./components/NewBook/NewBook";
import ViewBook from "./screens/viewBook/ViewBook";
import EditBook from "./components/editBook/EditBook";
import Navbar from "./components/navbar/Navbar";

import {
   BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/add" element={<NewBook/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/viewbook" element={<ViewBook />}/>
            <Route path="/editbook" element={<EditBook />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
