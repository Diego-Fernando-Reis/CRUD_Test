import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Header = ()=>{
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
          Welcome:
        </span>
      </div>
    </nav>
  )
}

export default Header;