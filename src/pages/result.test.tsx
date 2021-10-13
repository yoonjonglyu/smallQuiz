import React from 'react';
import Result from './result';

import { render, screen } from '@testing-library/react';

describe('Result 컴포넌트', () => {
    test('Result 컴포넌트 렌더링', () => {
        render(<Result />);
        expect(screen.getByRole('heading')).toHaveTextContent('풀이 결과');
        expect(screen.getByRole('main')).toHaveTextContent('소요시간:');
        expect(screen.getByRole('main')).toHaveTextContent('정답 갯수:');
        expect(screen.getByRole('main')).toHaveTextContent('오답 갯수:');
        expect(screen.getByRole('main')).toHaveTextContent('다시 풀기');
        expect(screen.getByRole('main')).toHaveTextContent('오답 노트');
    });
});