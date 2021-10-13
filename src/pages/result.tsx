import React from 'react';

import Layout from '../components/layout/layout';

const Result: React.FC = () => {
    return (
        <Layout header="풀이 결과">
            <ul>
                <li>소요시간: </li>
                <li>정답 갯수: </li>
                <li>오답 갯수: </li>
            </ul>
            <ul>
                <li><button type="button">다시 풀기</button></li>
                <li><button type="button">오답 노트</button></li>
            </ul>
        </Layout>
    );
};

export default Result;