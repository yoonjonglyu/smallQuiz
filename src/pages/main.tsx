import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/layout';

const Main: React.FC = () => {
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