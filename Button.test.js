import React from 'react';
import {render,screen} from '@testing-library/react';
import Button from './Button';

test ('renders the correct label', () => {
    render(<Button label ="Click Me!" />);
    const buttonElement = screen.getbyText(/Click Me!/i);
    expect (buttonElement). toBeInTheDocument();

});
