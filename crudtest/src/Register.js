import { useState } from "react";
import {axios} from 'axios'
import {useNavigate} from 'react-router-dom'
import MaskedInput from "./MaskedInput";


const Register = () =>{
  let history = useNavigate();
  const [data, setData]=useState({
    nome:"",
    cpf: "",
    password: ""
  })

  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      nome:data.nome,
      cpf:data.cpf,
      password:data.password
    }

    console.log(sendData);

    //Criei uma documento php para não dar erro
    axios.post('http://localhost/php-react/register-login-php-simple/insert.php', sendData)
    .then((result)=>{
      if(result.data.Status === 'Invalid')
        {alert('Usuário inválido');}
      else
       { history(`/dashboard`);}
    })
  }
  return(
    <div className="main-box">
      <form onSubmit={submitForm}>
      <div className="row">
        <div><h1>Cadastro</h1></div>
      </div>
      <div className="row">
        <div>Nome</div>
        <div>
          <input type='text' name='nome' className="form-control" onChange={handleChange} value={data.nome}/>
        </div>
      </div>

      <div className="row">
        <div>CPF</div>
        <div>
          <MaskedInput  onChange={handleChange} value={data.cpf}/>
        </div>
      </div>

      <div className="row">
        <div>Password</div>
        <div className="col-md-6">
          <input type='password' name='password' className="form-control" onChange={handleChange} value={data.password}/>
        </div>
      </div>

      <div className="row">
        
        <div>
          <input type='submit' name='submit' value='Register' className="btn"/>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Register;