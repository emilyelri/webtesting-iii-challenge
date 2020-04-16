// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

// ensure matching snapshot to have include components
test('Dashboard renders correctly.', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});