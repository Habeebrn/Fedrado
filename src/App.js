import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

import Shedule from './Components/Shedule/Shedule';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="App">
      <Router>
      <Toaster richColors position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shedule" element={<Shedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
