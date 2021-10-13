import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StyledComponents from 'styled-components';

import Layout from '../components/layout/layout';
import ColorBtn from '../components/ui/atoms/colorBtn';
import { quizState } from '../lib/custom/quiz';
import { wrongNote } from '../lib/custom/wrong';

interface QuizProps {
    quiz: {
        idx: number
        question: string
        correct_answer: string
        answers: Array<string>
    }
}
const Notice = StyledComponents.strong`
    font-size: 1.2rem;
    color: ${props => props.color}
`;

const Quiz: React.FC<QuizProps> = (props) => {
    const {
        quiz
    } = props;
    const quizHook = quizState();
    const wrongHook = wrongNote();
    const [select, setSelect] = useState<null | string>(null);
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const [time, setTime] = useState<number>(Date.now());

    useEffect(() => {
        wrongHook.clearWrong();
    }, []);

    const selectAnswer = (answer: string) => {
        setSelect(answer);
        quizHook.checkAnser(quiz.idx, answer === quiz.correct_answer);
        quizHook.updateTime(Date.now() - time);
        if (answer !== quiz.correct_answer) {
            wrongHook.addWrong({
                question: quiz.question,
                correct_answer: quiz.correct_answer
            });
        }
    }
    const handleNext = () => {
        if (quiz.idx + 1 < quizHook.quizList.length) {
            quizHook.selectQuiz(quiz.idx + 1);
            setSelect(null);
            setTime(Date.now());
        } else {
            setIsEnd(true);
        }
    }

    return (
        <Layout header={"퀴즈"}>
            <h2 dangerouslySetInnerHTML={{ __html: quiz.question }} />
            <ul>
                {
                    !select && quiz.answers
                        .map((answer, idx) =>
                            <li key={idx}>
                                <ColorBtn color="#FF5C58" onClick={() => selectAnswer(answer)}>
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </ColorBtn>
                            </li>)
                }
            </ul>
            {
                select &&
                (
                    select === quiz.correct_answer ?
                        <Notice color="#6ECB63">맞았다!!</Notice> :
                        <Notice color="#950101">틀렸다!!</Notice>
                )
            }
            <br />
            {select && <ColorBtn color="#FF7777" onClick={handleNext}>다음 문항</ColorBtn>}
            {isEnd && <Redirect to="/result" />}
            {quizHook.quizList.length === 0 && <Redirect to="/" />}
        </Layout>
    );
}

export default Quiz;