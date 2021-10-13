import React from 'react';
import Quiz from './quiz';

import { render, screen } from '@testing-library/react';

describe('Quiz 컴포넌트', () => {
    test('Quiz 컴포넌트 렌더링', () => {
        render(<Quiz />);
        expect(screen.getByRole('heading')).toHaveTextContent("퀴즈");
        expect(screen.getByRole('main')).toHaveTextContent("문제");
    });
});