import {BrowserRouter as useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Dashboard = () =>{
  const [auth, setAuth] = useState('');
  let navigate = useNavigate();
  useEffect(()=>{
    var auth = localStorage.getItem('cpf');

    setAuth(auth);

  },
  [])

  if(auth===null){
    navigate('/Login');
  }

  return(
    <div>
      Página Privada
    </div>
  )
}

export default Dashboard;