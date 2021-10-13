import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/layout';
import { quizState } from '../lib/custom/quiz';

interface ResultProps {
    statis: {
        time: number
        answer: number
        wrong: number
    };
}
const Result: React.FC<ResultProps> = (props) => {
    const {
        statis
    } = props;
    const quizHook = quizState();

    return (
        <Layout header="풀이 결과">
            <ul>
                <li>소요시간: {(statis.time - statis.time % 60) / 60} 분 {statis.time % 60} 초</li>
                <li>정답 갯수: {statis.answer} 개</li>
                <li>오답 갯수: {statis.wrong} 개</li>
            </ul>
            <ul>
                <li><Link to="/quiz" onClick={() => quizHook.selectQuiz(0)}>다시 풀기</Link></li>
                <li><Link to="/wrong">오답 노트</Link></li>
            </ul>
        </Layout>
    );
};

export default Result;