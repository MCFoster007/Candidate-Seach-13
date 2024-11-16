import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home';
import PotentialCandidates from './pages/PotentialCandidates';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potential-candidates" element={<PotentialCandidates />} />
      
  
      </Routes>
    </BrowserRouter>
  );
};

export default App;

