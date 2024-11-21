import { styled } from 'styled-components';
import { InputBox } from '../../components/InputBox/InputBox';
import { useState } from 'react';
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

const Need = styled.p`
    color: transparent;
    font-size: 3vh;
`;

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    overflow-y: auto;
    padding: 4vh;
`;

export const FirstPage = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [answered, isAnswered] = useState(false);

    const checkAnswer = (value: string) => {
        if (value === '31-05') {
            isAnswered(true);
        }
        setAnswer(value);
    }

    const nextTask = async() => {
        if (answered) {
            localStorage.setItem('step', '2');
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate(`/app/2`);
        }
    }

    return (
        <StyledPage>
            <Header>Вступление</Header>
            <Paragraph>Прежде чем начнем, давай обозначу правила игры 🤓.</Paragraph>
            <Paragraph>Все "загадки" ❇️ являются каким-либо зажданием, решив которое ты можешь открыть коробку с определенным номером</Paragraph>
            <Paragraph>Все ответы на загадки вводятся внизу в поле для ввода</Paragraph>
            <Paragraph>Если ты не знаешь ответа, то можешь попросить подсказку, но помни, что прямой ответ я скажу тогда и только тогда когда ты используешь все подсказки</Paragraph>
            <Paragraph><b>А ТАК НЕ ИНТЕРЕСНО</b></Paragraph>
            <Paragraph>Все соблюдение правил лежит на твоей отвественности, но я расстроюсь если ты их нарушишь 🙁</Paragraph>
            <Paragraph>Удачи!</Paragraph>
            <Header>Загадка #1</Header>
            <Paragraph>Первая загадка простая, разогревочная, но каждый раз они будут сложнее</Paragraph>
            <Task>Когда я тебе впервые написал?</Task>
            <Paragraph>Формат ответа ДД-ММ. Например 21 Ноября это 21-11</Paragraph>
            <InputBox inputType="text" placeholder="Твой ответ" value={answer} onChange={(value) => { checkAnswer(value); }} />
            <Button onClick={nextTask} size="large" time={answered}>Дальше?</Button>
            <Need>Загадка #1</Need>
        </StyledPage>       
    );
}

export default FirstPage;