import React from 'react';
import App from "./app";
import { render } from '@testing-library/react';

describe("init", () => {
    it("초기설정", () => {
        const { container } = render((<App />));
        expect(container).toHaveTextContent("init");
    });
});