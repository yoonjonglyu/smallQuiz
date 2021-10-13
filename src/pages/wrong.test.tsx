import React from 'react';
import Wrong from './wrong';

import { render, screen } from '@testing-library/react';

describe('Wrong 컴포넌트', () => {
    test('wrong 컴포넌트 렌더링', () => {
        render(<Wrong />);
        expect(screen.getByRole('heading')).toHaveTextContent('오답 노트');
    });
});