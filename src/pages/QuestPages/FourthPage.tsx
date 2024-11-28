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

export const FourthPage = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [answered, isAnswered] = useState(false);
    const [onTime, setTime] = useState(false);

    const checkAnswer = (value: string) => {
        if (value === '162') {
            isAnswered(true);
        }
        setAnswer(value);
    }

    const nextTask = async() => {
        if (answered) {
            localStorage.setItem('step', '5');
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate(`/app/5`);
        }
    }

    useEffect(() => {
        const today = new Date();
        setTime(today.getDate() >= 31 && today.getMonth() >= 11);
    });

    return (
        <StyledPage>
            {onTime ? 
            (
                <>
                    <Paragraph>Получилось вчера разгадать шифр? Какая ты у меня умненькая💕</Paragraph>
                    <Paragraph>Так. А теперь загадка</Paragraph>
                    <Header>Загадка #4</Header>
                    <Task>Ответь на вопрос</Task>
                    <Paragraph>Йгждфгж ьёэв еу ъеэйкэ?</Paragraph>
                    <Paragraph>Ой боже мой... Видимо я сошел с ума. Ладно пойду покушаю <u><b>Цезаря</b></u> может через <u><b>25</b></u> минут легче станет</Paragraph>
                    <InputBox inputType="text" placeholder="Твой ответ" value={answer} onChange={(value) => { checkAnswer(value); }} />
                    {answered? (
                        <Сorrect>Умничка! Можешь открывать подарок #306. И переходи на следующую страничку</Сorrect>
                    ) : (
                        <Mistake>Еще не правильно...</Mistake>
                    )}
                    <Button onClick={nextTask} size="large" time={answered}>Дальше?</Button>
                    <Need>Загадка #4</Need>
                </>
            ): (
                <Paragraph style={{alignSelf: "center", fontSize: "8vh", textAlign: "center"}}>Хватит на сегодня! Приходи 31 декабря!</Paragraph>
            )}
        </StyledPage>       
    );
}

export default FourthPage;