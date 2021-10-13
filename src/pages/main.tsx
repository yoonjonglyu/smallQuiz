import React, { useLayoutEffect } from 'react';
import StyledComponents from 'styled-components';

import Layout from '../components/layout/layout';
import LinkBtn from '../components/ui/atoms/linkBtn';
import { quizState } from '../lib/custom/quiz';

const ListItem = StyledComponents.li`
    display: block;
    margin : 20px;
`;

const Main: React.FC = () => {
    const quizHook = quizState();
    useLayoutEffect(() => {
        quizHook.refreshQuizList();
    }, []);

    return (
        <Layout header="스몰퀴즈">
            <ul>
                <ListItem><LinkBtn to="/quiz" onClick={() => quizHook.selectQuiz(0)}>퀴즈풀기</LinkBtn></ListItem>
                <ListItem><LinkBtn to="/wrong">오답노트</LinkBtn></ListItem>
            </ul>
        </Layout>
    );
}

export default Main;