import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  {useState} from 'react';

const Login = () =>{
  let navigate = useNavigate();
  const[user, setUser] = useState({cpf:'', password:''})

  const handleChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      cpf:user.cpf,
      password:user.password
    }

    console.log(sendData);

    //Criei uma documento php para não dar erro
    axios.post('http://localhost/php-react/register-login-php-simple/login.php', sendData)
    .then((result)=>{
      if(result.data.Status === '200')
        {
          window.localStorage.setItem('cpf', result.data.cpf);
          window.localStorage.setItem('nome', (result.data.nome));
          navigate(`/dashboard`);}
      else
       { alert('Usuário inválido');}
    })
  }
  return(
    <form onSubmit={submitForm}>
      <div className="main-box">
        <div className="row">
          <h1>Página de Login</h1>
        </div>
        <div className="row">
          <span>CPF:</span>
          <input type='text' name='cpf' onChange={handleChange} value={user.cpf}/>
        </div>
        <div className="row">
          <span>password:</span>
          <input type='password' name='password' onChange={handleChange} value={user.password}/>
        </div>
        <div className="row">
          <input type='submit' name='submit' className="btn" value='Entrar'/>
        </div>
      </div>
    </form>
  )
}

export default Login;