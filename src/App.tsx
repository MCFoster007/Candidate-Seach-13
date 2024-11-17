import { Outlet} from 'react-router-dom';// wraps the browser routing from main.tsx like a package.
import Nav from './components/Nav';


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

