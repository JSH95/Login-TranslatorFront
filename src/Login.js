import React, { useState } from 'react';
import App from './App';
import axios from 'axios';

function Login() {
  const [isLogin, setLogin] = useState(false);

  const onLogin = () => {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
        const result = axios({
          url: '/login',
          params : {
            id: id,
            password: password
          }
        })
        .then((res) => {
            setLogin(true)
        })
        .catch((error) => {
            if(error.response.status === 503) {
                alert('아이디 또는 패스워드를 확인하세요')
            } else if(error.response.status === 500) {
                alert('API통신 장애')
            }
        });
  }


  return (

    isLogin ?
    <App />

    :
    
    <div>
      <label>ID :</label><br/>
      <input type='text' placeholder='아이디' id='id' /><br/>
      <label>PASSWORD :</label><br/>
      <input type='password' placeholder='암호' id='password' /><br/><br/>
      <button onClick={onLogin}>로그인</button>
    </div>

  );

}


export default Login;