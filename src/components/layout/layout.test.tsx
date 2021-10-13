import React from 'react';
import Layout from './layout';

import { render, screen } from '@testing-library/react';

describe('레이아웃 컴포넌트', () => {
    test('레이아웃 렌더링', () => {
        render(
            <Layout header={"타이틀"}>
                자식
            </Layout>
        );
        expect(screen.getByRole('heading')).toHaveTextContent("타이틀");
        expect(screen.getByRole('main')).toHaveTextContent("자식");
    });
});