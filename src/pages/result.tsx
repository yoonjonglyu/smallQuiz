import React from 'react';
import { Link } from 'react-router-dom';
import StyeldComponents from 'styled-components';

import Layout from '../components/layout/layout';
import LinkBtn from '../components/ui/atoms/linkBtn';
import { quizState } from '../lib/custom/quiz';

interface ResultProps {
    statis: {
        time: number
        answer: number
        wrong: number
    };
}
const ListItem = StyeldComponents.li`
    margin: 16px 0;
`;


const Result: React.FC<ResultProps> = (props) => {
    const {
        statis
    } = props;
    const quizHook = quizState();

    return (
        <Layout header="풀이 결과">
            <ul>
                <ListItem>소요시간: {(statis.time - statis.time % 60) / 60} 분 {statis.time % 60} 초</ListItem>
                <ListItem>정답 갯수: {statis.answer} 개</ListItem>
                <ListItem>오답 갯수: {statis.wrong} 개</ListItem>
            </ul>
            <ul>
                <ListItem><LinkBtn to="/quiz" onClick={() => quizHook.selectQuiz(0)}>다시 풀기</LinkBtn></ListItem>
                <ListItem><LinkBtn to="/wrong">오답 노트</LinkBtn></ListItem>
            </ul>
        </Layout>
    );
};

export default Result;