import React from 'react';
import Main from './main';

import { render, screen } from '@testing-library/react';



describe('Main 컴포넌트', () => {
    test('Main 컴포넌트 렌더링', () => {
        render(<Main />);
        expect(screen.getByText("Main")).toBeInTheDocument();
    });
});