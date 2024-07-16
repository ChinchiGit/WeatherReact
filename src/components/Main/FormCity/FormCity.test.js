import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormCity from './FormCity';

describe('FormCity', () => {
  it('renders without crashing', () => {
    render(<FormCity />);
  });

  it('displays a text input for the city', () => {
    render(<FormCity />);
    const input = screen.getByPlaceholderText('Enter city');
    expect(input).toBeInTheDocument();
  });

  it('calls the onSubmit function when the form is submitted', () => {
    const mockSubmit = jest.fn();
    render(<FormCity onSubmit={mockSubmit} />);
    const button = screen.getByText('Search');
    fireEvent.click(button);
    expect(mockSubmit).toHaveBeenCalled();
  });
});