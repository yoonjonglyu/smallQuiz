import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Wrong from './wrong';

import { render, screen } from '@testing-library/react';

describe('Wrong 컴포넌트', () => {
    const quiz = {
        question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
        correct_answer: "Athena"
    };

    test('wrong 컴포넌트 렌더링', () => {
        render(
            <Router>
                <Wrong wrongs={new Array(5).fill(quiz)} />
            </Router>
        );
        expect(screen.getAllByRole('heading')[0]).toHaveTextContent('오답 노트');
        expect(screen.getByRole('main')).toHaveTextContent(`문제: ${quiz.question}`);
        expect(screen.getByRole('main')).toHaveTextContent(`정답: ${quiz.correct_answer}`);
        expect(screen.getByRole('link')).toHaveTextContent('처음으로');
    });
    test('오답이 없을 시', () => {
        render(
            <Router>
                <Wrong wrongs={[]} />
            </Router>
        );
        expect(screen.getAllByRole('heading')[0]).toHaveTextContent('오답 노트');
        expect(screen.getByText('오답 노트가 없습니다.')).toBeInTheDocument();
        expect(screen.getByRole('main')).not.toHaveTextContent('문제:');
        expect(screen.getByRole('main')).not.toHaveTextContent('정답:');
        expect(screen.getByRole('link')).toHaveTextContent('처음으로');
    });
});