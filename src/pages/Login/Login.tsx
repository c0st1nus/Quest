import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { InputBox } from '../../components/InputBox/InputBox';
import { Button } from '../../components/Button/Button';
import { useNavigate } from "react-router-dom";
import { Loading } from '../../components/Loading/Loading';
import './Login.css';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [alarm, setAlarm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ClickHandle = async () => {
    if (login && password) {
      setLoading(true);
      try {
        let response: [boolean, string];
        response = await invoke<[boolean, string]>('login_user', { login, password });
        if (response[0]) {
          localStorage.setItem('authToken', response[1]);
          console.log(localStorage.getItem('authToken'));
          navigate('/');
        } else {
          setAlarm(response[1]);
        }
      } catch (error) {
        console.error(error);
        setAlarm('Error during login');
      } finally {
        setLoading(false);
      }
    } else {
      setAlarm('Fill in all fields');
    }
  };

  return (
    loading ? (
      <Loading />
    ) : (
    <div className='container'>
      <h1 id="signup_header">Добро пожаловать!</h1>
        <div id="signup_form">
          <InputBox inputType="text" placeholder="Логин" value={login} onChange={setLogin} />
          <InputBox inputType="password" placeholder="Пароль" value={password} onChange={setPassword} />
          <p id="alarm_p">{alarm}</p>
          <Button onClick={ClickHandle} size='medium'>Login</Button>
        </div>
    </div>
    )
  );
};