import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Service from './Components/OurService/Service';
import Shedule from './Components/Shedule/Shedule';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shedule" element={<Shedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
