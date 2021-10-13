import React from 'react';
import Result from './result';

import { render, screen } from '@testing-library/react';

describe('Result 컴포넌트', () => {
    const statis = {
        time: 380,
        answer: 8,
        wrong: 2,
    };

    test('Result 컴포넌트 렌더링', () => {
        render(<Result statis={statis} />);
        expect(screen.getByRole('heading')).toHaveTextContent('풀이 결과');
        expect(screen.getByRole('main'))
        .toHaveTextContent(`소요시간: ${(statis.time - statis.time % 60) / 60} 분 ${statis.time % 60} 초`);
        expect(screen.getByRole('main')).toHaveTextContent(`정답 갯수: ${statis.answer} 개`);
        expect(screen.getByRole('main')).toHaveTextContent(`오답 갯수: ${statis.wrong} 개`);
        expect(screen.getByRole('main')).toHaveTextContent('다시 풀기');
        expect(screen.getByRole('main')).toHaveTextContent('오답 노트');
    });
});