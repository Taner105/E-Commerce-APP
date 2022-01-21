import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";


function App() {
  return ( 
  <Router>
    <Navbar />
     <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    
    </Router>);
}

function Home() {
  return <h2>Home</h2>
}

export default App;
