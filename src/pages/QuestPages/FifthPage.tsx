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

export const FifthPage = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [answered, isAnswered] = useState(false);
    const [onTime, setTime] = useState(false);

    const checkAnswer = (value: string) => {
        if (value.toLowerCase() === '5415') {
            isAnswered(true);
        }
        setAnswer(value);
    }

    const nextTask = async() => {
        if (answered) {
            localStorage.setItem('step', '6');
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate(`/app/6`);
        }
    }

    useEffect(() => {
        const today = new Date();
        setTime(today.getDate() >= 1 && today.getMonth() >= 0);
    });

    return (
        <StyledPage>
            {onTime ? 
            (
                <>
                    <Paragraph>Уже 1ое Января?!</Paragraph>
                    <Paragraph>С новым годом! Как же быстро время прошло...</Paragraph>
                    <Header>Загадка #5</Header>
                    <Task>Сложи все номера прошлых подарков</Task>
                    <Paragraph>Год свиньи прошел, и будет только в 2031... Но удивительное совпадение. Если сложит все номера прошлых подарков и отнять 4...</Paragraph>
                    <Paragraph>То мы получим год Свиньи в далеком будущем</Paragraph>                    <Paragraph>Найди про какой год я говорю</Paragraph>
                    <Paragraph>Если выкинула упаковки, то номера подарков спроси у меня</Paragraph>
                    <InputBox inputType="text" placeholder="Твой ответ" value={answer} onChange={(value) => { checkAnswer(value); }} />
                    {answered? (
                        <Сorrect>Умничка! Можешь открывать подарок #5415. И получать последний😥 мой подарок</Сorrect>
                    ) : (
                        <Mistake>Еще не правильно...</Mistake>
                    )}
                    <Button onClick={nextTask} size="large" time={answered}>Дальше?</Button>
                    <Need>Загадка #3</Need>
                </>
            ): (
                <Paragraph style={{alignSelf: "center", fontSize: "8vh", textAlign: "center"}}>Хватит на сегодня! Приходи 1ого Января!</Paragraph>
            )}
        </StyledPage>       
    );
}

export default FifthPage;