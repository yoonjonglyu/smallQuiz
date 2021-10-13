import React from 'react';

import Layout from '../components/layout/layout';

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


    return (
        <Layout header="풀이 결과">
            <ul>
                <li>소요시간: {(statis.time - statis.time % 60) / 60} 분 {statis.time % 60} 초</li>
                <li>정답 갯수: {statis.answer} 개</li>
                <li>오답 갯수: {statis.wrong} 개</li>
            </ul>
            <ul>
                <li><button type="button">다시 풀기</button></li>
                <li><button type="button">오답 노트</button></li>
            </ul>
        </Layout>
    );
};

export default Result;