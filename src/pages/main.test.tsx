import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './main';

import { render, screen } from '@testing-library/react';


describe('Main 컴포넌트', () => {
    test('Main 컴포넌트 렌더링', () => {
        render(
            <RecoilRoot>
                <Router>
                    <Main />
                </Router>
            </RecoilRoot>
        );
        expect(screen.getByText("스몰퀴즈")).toBeInTheDocument();
        expect(screen.getByText("퀴즈풀기")).toBeInTheDocument();
        expect(screen.getByText("오답노트")).toBeInTheDocument();
    });
});