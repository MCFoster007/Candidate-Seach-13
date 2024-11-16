import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/potential-candidates">Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
