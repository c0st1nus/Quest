import { styled } from 'styled-components';



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

export const FinalPage = () => {
    const compliments = [
        "красивая",
        "умненькая",
        "заботливая",
        "привлекательная",
        "класная",
        "добрая",
        "нежная",
        "милая",
        "очаровательная",
        "обворожительная",
        "неповторимая",
        "душевная",
        "незабываемая",
        "неотразимая",
        "шикарная",
        "ослепительная",
        "страстная",
        "фантастическая",
        "божественная",
        "завораживающая",
        "ангельская",
        "лучезарная",
        "Адски божественная",
        "яркая",
        "отзывчивая",
        "обалденная",
        "сногсшибательная",
        "стройная",
        "обольстительная",
        "кокетливая",
        "утончённая",
        "грациозная",
        "весёлая",
        "энергичная",
        "креативная",
        "стильная",
        "коммуникабельная",
        "тактичная",
        "чудесная",
        "романтичная",
        "разносторонняя",
        "сказочная",
        "симпатичная",
        "невозможно",
        "единственная",
        "ласковая",
        "сладенькая",
        "умопомрачительная",
        "желанная",
        "непредсказуемая",
        "загадочная",
        "интригующая",
        "безупречная",
        "гармоничная",
        "совершенная",
        "лучшая",
        "скромная",
        "изысканная",
        "Ангельски прекрасная",
        "естественная",
        "искренняя",
        "дружелюбная",
        "понимающая",
        "таинственная",
        "мечтательная",
        "заманчивая",
        "искромётная",
        "волнительная",
        "манящая",
        "бесподобная",
        "бескорыстная",
        "непосредственная",
        "соблазнительная",
        "одурманивающая",
        "жизнерадостная",
        "прелестная",
        "улыбчивая",
        "застенчивая",
        "зажигательная",
        "честная",
        "возбуждающая",
        "чистосердечная",
        "игривая",
        "обаятельная",
        "феерическая",
        "целеустремлённая",
        "дивная",
        "женственная",
        "блаженная",
        "ненаглядная",
        "необходимая",
        "изумительная",
        "трогательная",
        "миниатюрная",
        "чарующая",
        "самая-самая",
        "сильная",
        "вдохновляющая",
        "восхитительная",
        "радостная",
        "мудрая",
        "осмысленная",
        "прекрасная",
        "неживущая",
        "забавная",
        "смешная",
        "талантливая",
        "элегантная",
        "решительная",
        "уверенная",
        "харизматичная",
        "впечатляющая",
        "деликатная",
        "остроумная",
        "утонченная",
        "эффектная",
        "светлая",
        "великодушная",
        "лучистая",
        // Новые комплименты
        "невероятная",
        "превосходная",
        "обворожительная",
        "распрекрасная",
        "невообразимая",
        "непредсказуемая",
        "пленительная",
        "ослепительная",
        "великолепная",
        "изумительная",
        "блистательная",
        "незабываемая",
        "потрясающая",
        "неземная",
        "фантастическая",
        "восхитительная",
        "сказочная",
        "исключительная",
        "необыкновенная",
        "чудесная",
        "изящная",
        "утончённая",
        "безупречная",
        "дивная",
        "роскошная",
        "недосягаемая",
        "незаурядная",
        "уникальная",
        "изысканная",
        "неповторимая",
        "потрясающая",
        "обаятельная",
        "неотразимая",
        "зажигательная",
        "смелая",
        "грациозная",
        "невероятная",
        "искромётная",
        "яркая",
        "невообразимая",
        "очаровательная",
        "замечательная",
        "неземная",
        "пленительная",
        "вдохновляющая",
        "одарённая",
        "лучезарная",
        "ослепительная",
        "изумительная",
        "божественная",
        "непредсказуемая",
        "загадочная",
        "обворожительная",
        "привлекательная",
        "утончённая",
        "манящая",
        "искромётная",
        "неподражаемая",
        "великолепная",
        "блистательная",
        "креативная",
        "энергичная",
        "симпатичная",
        "миловидная",
        "обояшка",
        "неотразимая",
        "талантливая",
        "энергичная",
        "обаятельная",
        "неповторимая",
        "изумительная",
        "умопомрачительная",
        "восхитительная",
        "безупречная",
        "добродушная",
        "королевская",
        "стильная",
        "фантастическая",
        "ангельская",
        "соблазнительная",
        "старательная",
        "задорная",
        "непредсказуемая",
        "сногсшибательная",
        "замечательная",
        "неотразимая",
        "улыбчивая",
        "адекватная",
        "лучезарная",
        "изящная",
        "обаятельная",
        "мудрая",
        "чарующая",
        "яркая",
        "шикарная",
        "чувственная",
        "словно богиня",
        "радушная",
        "необыкновенная",
        "славная",
        "чистосердечная",
        "тактичная",
        "самодостаточная",
        "привлекательная",
        "серьёзная",
        "жизнерадостная",
        "ответственная",
        "неповторимая",
        "загадочная",
        "обаятельная",
        "трудолюбивая",
        "честная",
        "очаровательная",
        "привлекательная",
        "лучезарная",
        "искренняя",
        "изобретательная",
        "искромётная",
        "яркая",
        "универсальная",
        "непредсказуемая",
        "харизматичная",
        "целомудренная",
        "невероятная",
        "любопытная",
        "фееричная",
        "скромная",
        "обстоятельная",
        "обаятельная",
        "реалистичная",
        "кокетливая",
        "энтузиастичная",
        "мечтательная",
        "самостоятельная",
        "романтичная",
        "эрудированная",
        "искренняя",
        "интеллигентная",
        "умиротворяющая",
        "обаяшка",
        "самоотверженная",
        "весёлая",
        "невообразимая",
        "великолепная",
        "активная",
        "живописная",
        "креативная",
        "решительная",
        "улыбчивая",
        "яркая",
        "страстная",
        "позитивная",
        "добросердечная",
        "жизнерадостная",
        "интригующая",
        "обаятельная",
        "смелая",
        "превосходная",
        "совершенная",
        "гармоничная",
        "увлекательная",
        "исключительная",
        "вдохновляющая",
        "стильная",
        "добрая",
        "щедрая",
        "талантливая",
        "обворожительная",
        "жизнелюбивая",
        "интеллектуальная",
        "радушная",
        "решительная",
        "милосердная",
        "прелестная",
        "изумительная",
        "необычная",
        "лукавая",
        "сильная",
        "весёлая",
        "изобретательная",
        "эстетичная",
        "неповторимая",
        "обольстительная",
        "несравненная",
        "грациозная",
        "очаровательная",
        "улыбчивая",
        "необыкновенная",
        "умная",
        "отзывчивая",
        "дружелюбная",
        "нежная",
        "добродушная",
        "искренная",
        "красноречивая",
        "женственная",
        "обожаемая",
        "мужественная",
        "отзывчивая",
        "обаятельная",
        "искренняя",
        "энергичная",
        "мужественная",
        "отзывчивая",
        "обаятельная",
        "позитивная",
        "смешная",
        "творческая",
        "внимательная",
        "преданная",
        "энергичная",
        "красноречивая",
        "обаятельная",
        "волевая",
        "фантастическая",
        "обаятельная",
        "пленительная",
        "обаятельная",
    ];
    return (
        <StyledPage>
            <Header>Поздравляю!🎉🎉🎉</Header>
            <Paragraph>Вика, ты успешно решила все задачи!</Paragraph>
            <Paragraph>И так как я тебя очень люблю я обнуляю все твои ошибки🥹</Paragraph>
            <Task>Твой результат:</Task>
            <Сorrect>Верных ответов: 5</Сorrect>
            <Mistake>Ошибок: 0</Mistake>
            <Task>Итого 1000*10^987 / 5</Task>
            <Paragraph>Огоо🔼🔼🔼🤯... Прямо как ты моя золотая❤️‍🔥❤️‍🔥❤️‍🔥</Paragraph>
            <Paragraph>А теперь пришло время перечислять все прилагательные про тебя</Paragraph>
            <Paragraph>И так, начнем</Paragraph>
            {Array.from({ length: compliments.length }).map((_, i) => (
                <Paragraph>{i+1}. {compliments[i].charAt(0).toUpperCase() + compliments[i].slice(1)}</Paragraph>
            ))}
            <Paragraph>Это не все. Но слов будет мало, чтобы описать мои чувства к тебе. Я люблю тебя Вика!</Paragraph>
            <Need>Эм... А что вы тут делаете?</Need>
        </StyledPage>       
    );
}

export default FinalPage;