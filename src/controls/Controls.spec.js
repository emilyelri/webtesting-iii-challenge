// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Control renders correctly.', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

test('Door can be toggled open on click.', () => {
    const toggleOpenMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleOpenMock} closed={true} />);

    const openButton = getByText(/open/i);
    fireEvent.click(openButton);    
    expect(toggleOpenMock).toHaveBeenCalled(); 
})

test('Door can be toggled closed on click.', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosedMock} closed={false} />);

    const closeButton = getByText(/close/i);
    fireEvent.click(closeButton);    
    expect(toggleClosedMock).toHaveBeenCalled(); 
})

test('Door cannot be opened when locked.', () => {
    const toggleOpenMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleOpenMock} closed={true} locked={true} />);

    const openButton = getByText(/open/i);
    fireEvent.click(openButton);
    expect(toggleOpenMock).not.toHaveBeenCalled();
})

test('Door cannot be closed when locked.', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosedMock} closed={false} locked={true} />);

    const closeButton = getByText(/close/i);
    fireEvent.click(closeButton);
    expect(toggleClosedMock).not.toHaveBeenCalled();
})
