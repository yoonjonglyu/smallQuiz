import React from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './app';
import Quiz from './pages/quiz';

import { createBrowserHistory } from 'history';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    test('메인화면', () => {
        const history = createBrowserHistory();
        render(
            <RecoilRoot>
                <Router history={history}>
                    <App />
                </Router>
            </RecoilRoot>
        );
        expect(screen.getByText('스몰퀴즈')).toBeInTheDocument();
        expect(screen.getByText('퀴즈풀기')).toBeInTheDocument();
        expect(screen.getByText('오답노트')).toBeInTheDocument();
    });
    test('퀴즈풀기', () => {
        const history = createBrowserHistory();
        history.push('/quiz');
        render(
            <RecoilRoot>
                <Router history={history}>
                    <Quiz quiz={{
                        idx: 0,
                        question: '',
                        answers: [],
                        correct_answer: ''
                    }}/>
                </Router>
            </RecoilRoot>
        );
        expect(screen.getByText('퀴즈')).toBeInTheDocument();
    });
    test('오답노트', () => {
        const history = createBrowserHistory();
        history.push('/wrong');
        render(
            <RecoilRoot>
                <Router history={history}>
                    <App />
                </Router>
            </RecoilRoot>
        );
        expect(screen.getByText('오답 노트')).toBeInTheDocument();
    });
    test('결과', () => {
        const history = createBrowserHistory();
        history.push('/result');
        render(
            <RecoilRoot>
                <Router history={history}>
                    <App />
                </Router>
            </RecoilRoot>
        );
        expect(screen.getByText('풀이 결과')).toBeInTheDocument();
    });
});