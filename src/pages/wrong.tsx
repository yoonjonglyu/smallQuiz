import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/layout';

interface WrongProps {
    wrongs: Array<{
        question: string
        correct_answer: string
    }>
}

const Wrong: React.FC<WrongProps> = (props) => {
    const {
        wrongs
    } = props;
    return (
        <Layout header="오답 노트">
            {
                wrongs.length === 0 && <strong>틀린 문제가 없습니다.</strong>
            }
            {
                wrongs.map((quiz, idx) => {
                    return (
                        <div key={idx}>
                            <h2>문제: {quiz.question}</h2>
                            <p>정답: {quiz.correct_answer}</p>
                        </div>
                    );
                })
            }
            <Link to="/">처음으로</Link>
        </Layout>
    );
}

export default Wrong;