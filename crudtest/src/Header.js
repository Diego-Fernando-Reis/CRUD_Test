import {BrowserRouter as Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Header = ()=>{
  const [user, setUser] = useState('');
  useEffect(()=>{
    var userName = localStorage.getItem('nome');

    setUser(userName);

  },[])
  return(
    <nav>
      <a href="/">Navbar w/ text</a>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
        </ul>
        <span class="navbar-text">
          Welcome: {user}
        </span>
      </div>
    </nav>
  )
}

export default Header;