import { styled } from 'styled-components';
import { InputBox } from '../../components/InputBox/InputBox';
import { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { useNavigate } from "react-router-dom";


const Header = styled.h1`
    color: #62BEC1;
    font-family: 'JetBrains Mono', monospace;
    font-size: 4vh;
`;

const Paragraph = styled.p`
    color: #62BEC1;
    font-family: 'JetBrains Mono', monospace;
    font-size: 2vh;
    margin-top: 10px;
    align-self: flex-start;
`;

const Task = styled.p`
    color: #62BEC1;
    font-family: 'JetBrains Mono', monospace;
    font-size: 3vh;
    margin-top: 10px;
    font-weight: 800;
    align-self: flex-start;
`;

const Сorrect = styled.p`
    color: #20c728;
    font-family: 'JetBrains Mono', monospace;
    font-size: 3vh;
    margin-top: 10px;
    font-weight: 800;
    align-self: flex-start;
    width: 100%; /* Добавлено */
`;

const Mistake = styled.p`
    color: #d83737;
    font-family: 'JetBrains Mono', monospace;
    font-size: 3vh;
    margin-top: 10px;
    font-weight: 800;
    align-self: flex-start;
    width: 100%; /* Добавлено */
`;

const Need = styled.p`
    color: transparent;
    font-size: 3vh;
`;

const StyledPage = styled.div`
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    overflow-y: auto;
    padding: 4vh;
`;

export const SecondPage = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [answered, isAnswered] = useState(false);
    const [onTime, setTime] = useState(false);

    const checkAnswer = (value: string) => {
        if (value.toLowerCase() === 'подсолнух') {
            isAnswered(true);
        }
        setAnswer(value);
    }

    const nextTask = async() => {
        if (answered) {
            localStorage.setItem('step', '3');
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate(`/app/3`);
        }
    }

    useEffect(() => {
        const today = new Date();
        setTime(today.getDate() >= 29 && today.getMonth() >= 11);
    });

    return (
        <StyledPage>
            {onTime ? 
            (
                <>
                    <Paragraph>Ну вот мы и снова здесь. Как тебе подарок? Классное колечко. Правда?</Paragraph>
                    <Paragraph>Ну а теперь время загадок!</Paragraph>
                    <Header>Задание #2</Header>
                    <Task>Сколько будет 2+2*2?</Task>
                    <Paragraph>ШУЧУ! Но вообще будет 6</Paragraph>
                    <Task>Разгадай шифр: </Task>
                    <Paragraph>11-1; 4-1; 3-5; 1-7; 5-6; 7-5; 9-1; 7-10; 4-5</Paragraph>
                    <Paragraph>Мини-подсказка: Еще не забыла про черный блокнот? 2 страница</Paragraph>
                    <InputBox inputType="text" placeholder="Твой ответ" value={answer} onChange={(value) => { checkAnswer(value); }} />
                    {answered? (
                        <Сorrect>Умничка! Можешь открывать подарок #2906. И переходи на следующую страничку</Сorrect>
                    ) : (
                        <Mistake>Еще не правильно...</Mistake>
                    )}
                    <Button onClick={nextTask} size="large" time={answered}>Дальше?</Button>
                    <Need>Загадка #2</Need>
                </>
            ): (
                <Paragraph style={{alignSelf: "center", fontSize: "8vh", textAlign: "center"}}>Хватит на сегодня! Приходи 29 декабря!</Paragraph>
            )}
        </StyledPage>       
    );
}

export default SecondPage;