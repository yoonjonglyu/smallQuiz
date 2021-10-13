import React from 'react';
import Quiz from './quiz';

import { render, screen } from '@testing-library/react';

describe('Quiz 컴포넌트', () => {
    test('Quiz 컴포넌트 렌더링', () => {
        render(
            <Quiz
                quiz={{
                    idx: 0,
                    question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
                    correct_answer: "Athena",
                    answers: ["Ares", "Artemis", "Apollo", "Athena"]
                }}
            />
        );
        expect(screen.getByRole('main'))
            .toHaveTextContent('This Greek mythological figure is the god\/goddess of battle strategy (among other things)');
        expect(screen.getByRole('main')).toHaveTextContent('Ares');
        expect(screen.getByRole('main')).toHaveTextContent('Artemis');
        expect(screen.getByRole('main')).toHaveTextContent('Apollo');
        expect(screen.getByRole('main')).toHaveTextContent('Athena');
    });
});