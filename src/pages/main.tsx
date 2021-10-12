import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <main role="main">
            <h1>스몰퀴즈</h1>
            <ul>
                <li><Link to="/quiz">퀴즈풀기</Link></li>
                <li><Link to="/wrong">오답노트</Link></li>
            </ul>
        </main>
    );
}

export default Main;