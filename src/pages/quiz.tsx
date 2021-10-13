import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Layout from '../components/layout/layout';
import { quizState } from '../lib/custom/quiz';

interface QuizProps {
    quiz: {
        idx: number
        question: string
        correct_answer: string
        answers: Array<string>
    }
}

const Quiz: React.FC<QuizProps> = (props) => {
    const {
        quiz
    } = props;
    const quizHook = quizState();
    const [select, setSelect] = useState<null | string>(null);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const selectAnswer = (answer: string) => {
        setSelect(answer);
        quizHook.checkAnser(quiz.idx, answer === quiz.correct_answer);
    }
    const handleNext = () => {
        if (quiz.idx + 1 < quizHook.quizList.length) {
            quizHook.selectQuiz(quiz.idx + 1);
            setSelect(null);
        } else {
            setIsEnd(true);
        }
    }

    return (
        <Layout header={"퀴즈"}>
            <h2>{quiz.question}</h2>
            <ul>
                {
                    !select && quiz.answers
                        .map((answer, idx) => <li key={idx}><button type="button" onClick={() => selectAnswer(answer)}>{answer}</button></li>)
                }
            </ul>
            {
                select &&
                (
                    select === quiz.correct_answer ?
                        "정답" :
                        "오답"
                )
            }
            {select && <button type="button" onClick={handleNext}>다음 문항</button>}
            {isEnd && <Redirect to="/result" />}
        </Layout>
    );
}

export default Quiz;