import React from 'react';

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
    return (
        <Layout header={"퀴즈"}>
            <h2>{quiz.question}</h2>
            <ul>
                {
                    quiz.answers.sort()
                        .map((answer, idx) => <li key={idx}><button type="button">{answer}</button></li>)
                }
            </ul>
        </Layout>
    );
}

export default Quiz;