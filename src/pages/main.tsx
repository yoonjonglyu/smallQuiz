import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/layout';
import { quizState } from '../lib/custom/quiz';

const Main: React.FC = () => {
    const quizHook = quizState();
    useLayoutEffect(() => {
        quizHook.refreshQuizList();
    }, []);
    useLayoutEffect(() => {
        quizHook.selectQuiz(0);
    },[quizHook.quizList]);

    return (
        <Layout header="스몰퀴즈">
            <ul>
                <li><Link to="/quiz">퀴즈풀기</Link></li>
                <li><Link to="/wrong">오답노트</Link></li>
            </ul>
        </Layout>
    );
}

export default Main;