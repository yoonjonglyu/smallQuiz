import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Quiz from './quiz';

import { render, screen, fireEvent } from '@testing-library/react';

describe('Quiz 컴포넌트', () => {
    const quiz = {
        idx: 0,
        question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
        correct_answer: "Athena",
        answers: ["Ares", "Artemis", "Apollo", "Athena"]
    };

    test('Quiz 컴포넌트 렌더링', () => {
        render(
            <RecoilRoot>
                <Router>
                    <Quiz quiz={quiz} />
                </Router>
            </RecoilRoot>
        );
        expect(screen.getByRole('main'))
            .toHaveTextContent('This Greek mythological figure is the god\/goddess of battle strategy (among other things)');
        expect(screen.getByRole('main')).toHaveTextContent('Ares');
        expect(screen.getByRole('main')).toHaveTextContent('Artemis');
        expect(screen.getByRole('main')).toHaveTextContent('Apollo');
        expect(screen.getByRole('main')).toHaveTextContent('Athena');

        fireEvent.click(screen.getByText("Athena"));
        expect(screen.getByText('다음 문항')).toBeInTheDocument();
    });
    test('정답 선택시 확인', () => {
        render(
            <RecoilRoot>
                <Router>
                    <Quiz quiz={quiz} />
                </Router>
            </RecoilRoot>
        );
        fireEvent.click(screen.getByText("Athena"));
        expect(screen.getByText("맞았다!!")).toBeInTheDocument();
        expect(screen.getByRole('main')).not.toHaveTextContent('Athena');
    });
    test('오답 선택시 확인', () => {
        render(
            <RecoilRoot>
                <Router>
                    <Quiz quiz={quiz} />
                </Router>
            </RecoilRoot>
        );
        fireEvent.click(screen.getByText("Ares"));
        expect(screen.getByText("틀렸다!!")).toBeInTheDocument();
        expect(screen.getByRole('main')).not.toHaveTextContent('Athena');
    });
});