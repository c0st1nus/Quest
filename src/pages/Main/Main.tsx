import { Button } from '../../components/Button/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import './Main.css';

export const MainPage = () => {
    const navigate = useNavigate();
    const [onTime, setOnTime] = useState(false);

    useEffect(() => {
        const t = localStorage.getItem('authToken')
        if (t === '') {
            navigate('/login');
        }
        else {
            if (localStorage.getItem('step') ?? false) {
                const step = localStorage.getItem('step');
                navigate(`/app/${step}`);
            }
            const today = new Date();
            setOnTime(today.getDate() >= 21 && today.getMonth() >= 10);
        }
    });

    const startApp = async () => {
        if (onTime) {
            await new Promise(resolve => setTimeout(resolve, 500));
            localStorage.setItem('step', '1');
            navigate('/app/1');
        }
        else {
            alert('Еще рано! Приходи 28 декабря!');
        }
    }
    return (
        <div className='container'>
            <h1 className='title'>Привет!</h1>
            <p className='paragraph'>Это мое мини приложение, созданное специально для поздравления моей любимой <b>Виктории</b></p>
            <p className='paragraph'>Уже 28 декабря? Ты готова? <u>Нажимай кнопку ниже</u>!</p>
            <Button onClick={startApp} size="large" time={onTime}>
                Начать!
            </Button>       
        </div>
    );
};