import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/PotentialCandidates">Potential Candidates</Link>
        </li>
        <li>
          <Link to="/CandidateSearch">Candidate Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;







//test this methos to see if it works

// function Nav({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#Home"
//           onClick={() => handlePageChange('Home')}

//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#Potential Candidates"
//           onClick={() => handlePageChange('Potential Candidates')}
 
//           className={currentPage === 'Potential Candidates' ? 'nav-link active' : 'nav-link'}
//         >
//           Potential Candidates
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#Candidate Search"
//           onClick={() => handlePageChange('Candidate Search')}
 
//           className={currentPage === 'Candidate Search' ? 'nav-link active' : 'nav-link'}
//         >
//           Candidate Search
//         </a>
//       </li>
      
//     </ul>
//   );
// }

// export default Nav;
