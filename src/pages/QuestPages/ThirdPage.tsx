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
    width: 100%;
`;

const Mistake = styled.p`
    color: #d83737;
    font-family: 'JetBrains Mono', monospace;
    font-size: 3vh;
    margin-top: 10px;
    font-weight: 800;
    align-self: flex-start;
    width: 100%;
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

export const ThirdPage = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [answered, isAnswered] = useState(false);
    const [onTime, setTime] = useState(false);

    const checkAnswer = (value: string) => {
        if (value.toLowerCase() === 'король и шут') {
            isAnswered(true);
        }
        setAnswer(value);
    }

    const nextTask = async() => {
        if (answered) {
            localStorage.setItem('step', '4');
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate(`/app/4`);
        }
    }

    useEffect(() => {
        const today = new Date();
        setTime(today.getDate() >= 30 && today.getMonth() >= 11);
    });

    return (
        <StyledPage>
            {onTime ? 
            (
                <>
                    <Paragraph>Ого! Какая ты молодец❤️‍🔥. Как тебе подарок? Често я был не уверен насчет него. Боялся что карандаши не понравятся.</Paragraph>
                    <Paragraph>Порадовались и хватит. Давай перейдем к следующей загадке.</Paragraph>
                    <Header>Загадка #3</Header>
                    <Task>Дешифруй сообщение и ответь на вопрос</Task>
                    <Paragraph>#m1ZxY #F8h2q #T9sBc #r4XqL #u7JkP #Z3f8z</Paragraph>
                    <Paragraph>Интересно, на сколько точный поиск в телеграмме?</Paragraph>
                    <InputBox inputType="text" placeholder="Твой ответ" value={answer} onChange={(value) => { checkAnswer(value); }} />
                    {answered? (
                        <Сorrect>Умничка! Можешь открывать подарок #2207. И переходи на следующую страничку</Сorrect>
                    ) : (
                        <Mistake>Еще не правильно...</Mistake>
                    )}
                    <Button onClick={nextTask} size="large" time={answered}>Дальше?</Button>
                    <Need>Загадка #3</Need>
                </>
            ): (
                <Paragraph style={{alignSelf: "center", fontSize: "8vh", textAlign: "center"}}>Хватит на сегодня! Приходи 30 декабря!</Paragraph>
            )}
        </StyledPage>       
    );
}

export default ThirdPage;