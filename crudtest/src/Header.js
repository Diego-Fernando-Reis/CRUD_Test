import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Header = ()=>{
  const [user, setUser] = useState('');
  useEffect(()=>{
    var userName = localStorage.getItem('nome');

    setUser(userName);

  },[])
  return(
    <nav id='menu'>
      <a>Login e Cadastro</a>
        <ul>
          <li>
            <Link to="/" id='link'>Home</Link>
          </li>
          <li>
            <Link to="/register" id='link'>Register</Link>
          </li>
          <li>
          <Link to="/login" id='link'>Login</Link>
          </li>
        </ul>
        <span class="navbar-text">
          Welcome: {user}
        </span>
    </nav>
  )
}

export default Header;