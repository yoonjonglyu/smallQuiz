import React, { useState } from 'react';

import Layout from '../components/layout/layout';

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

    const [select, setSelect] = useState<null | string>(null);

    const selectAnswer = (answer: string) => {
        setSelect(answer);
    }

    return (
        <Layout header={"퀴즈"}>
            <h2>{quiz.question}</h2>
            <ul>
                {
                    !select && quiz.answers.sort()
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
            {select && <button type="button">다음 문항</button>}
        </Layout>
    );
}

export default Quiz;