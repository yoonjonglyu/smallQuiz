import React from 'react';
import { Link } from 'react-router-dom';
import StyledComponents from 'styled-components';

import Layout from '../components/layout/layout';

interface WrongProps {
    wrongs: Array<{
        question: string
        correct_answer: string
    }>
}
const NoteBox = StyledComponents.article`
    border: 1px solid;
`;
const Notice = StyledComponents.strong`
    display: block;
    margin: 40px 0;
    color: #F0A500;
`;

const Wrong: React.FC<WrongProps> = (props) => {
    const {
        wrongs
    } = props;
    return (
        <Layout header="오답 노트">
            {
                wrongs.length === 0 && <Notice>오답 노트가 없습니다.</Notice>
            }
            {
                wrongs.map((quiz, idx) => {
                    return (
                        <NoteBox key={idx}>
                            <h2>문제: {quiz.question}</h2>
                            <p>정답: {quiz.correct_answer}</p>
                        </NoteBox>
                    );
                })
            }
            <Link to="/">처음으로</Link>
        </Layout>
    );
}

export default Wrong;