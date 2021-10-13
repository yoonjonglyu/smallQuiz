import React from 'react';
import { Router } from 'react-router-dom';
import App from './app';
import { createBrowserHistory } from 'history';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    test('메인화면', () => {
        const history = createBrowserHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(screen.getByText('스몰퀴즈')).toBeInTheDocument();
        expect(screen.getByText('퀴즈풀기')).toBeInTheDocument();
        expect(screen.getByText('오답노트')).toBeInTheDocument();
    });
    test('퀴즈풀기', () => {
        const history = createBrowserHistory();
        history.push('/quiz');
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(screen.getByText('퀴즈')).toBeInTheDocument();
    });
    test('오답노트', () => {
        const history = createBrowserHistory();
        history.push('/wrong');
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(screen.getByText('오답 노트')).toBeInTheDocument();
    });
    test('결과', () => {
        const history = createBrowserHistory();
        history.push('/result');
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(screen.getByText('풀이 결과')).toBeInTheDocument();
    });
});