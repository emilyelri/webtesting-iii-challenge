// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
import '@testing-library/jest-dom/extend-expect';

test('Display renders correctly.', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

test('Default setting is unlocked open.', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
});

test('Displays if it is open or closed and locked or unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/locked/i) || getByText(/unlocked/i);
    getByText(/open/i) || getByText(/closed/i);
})

test('Displays "Closed" if closed prop is true.', () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
});

test('Displays "Open" if closed prop is false.', () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
});

test('Uses "green-led" if open.', () => {
    const { queryByText } = render(<Display closed={false} />);
    const open = queryByText(/open/i);
    expect(open).toHaveClass('green-led');
});

test('Uses "red-led" if closed.', () => {
    const { queryByText } = render(<Display closed={true} />);
    const closed = queryByText(/closed/i);
    expect(closed).toHaveClass('red-led');
});

test('Uses "green-led" if unlocked.', () => {
    const { queryByText } = render(<Display locked={false} />);
    const unlocked = queryByText(/unlocked/i);
    expect(unlocked).toHaveClass('green-led');
});

test('Uses "red-led" if locked.', () => {
    const { queryByText } = render(<Display locked={true} />);
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass('red-led');
});

