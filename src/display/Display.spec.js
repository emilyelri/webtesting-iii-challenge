// Test away!
import React from 'react';
import { render, getByText } from '@testing-library/react';
import Display from './Display';

test('Display renders correctly.', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

test('Default setting is unlocked open.', () => {
    const container = render(<Display />);
    container.getByText(/unlocked/i);
    container.getByText(/open/i);
});