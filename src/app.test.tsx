import React from 'react';
import { Router } from 'react-router-dom';
import App from './app';
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react';

describe('App', () => {
    test('메인화면', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(screen.getByText('Main')).toBeInTheDocument();
    });
    test('퀴즈', () => {
        const history = createMemoryHistory();
        history.push('/quiz');
        render(
            <Router history={history}>
                <App />
            </Router>
        );

        expect(screen.getByText('퀴즈')).toBeInTheDocument();
    });
    test('오답노트', () => {
        const history = createMemoryHistory();
        
        history.push('/wrong')
        render(
            <Router history={history}>
                <App />
            </Router>
        );;
        expect(screen.getByText('오답노트')).toBeInTheDocument();
    });
});