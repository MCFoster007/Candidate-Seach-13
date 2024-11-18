import { Outlet} from 'react-router-dom';// wraps the browser routing from main.tsx like a package.
import Nav from './components/Nav';
// import Home from './pages/home';
// import CandidateSearch from './pages/CandidateSearch';
// import PotentialCandidates from './pages/PotentialCandidates';


const App = () => {
  return (
   <>
   
      <Nav />
      <main>
       <Outlet/>
      
  
      </main>
      </>
  );
};

export default App;






