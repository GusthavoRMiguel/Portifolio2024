import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '@/templates/home';

describe('HomePage', () => {
  it('expands circle when clicked', async () => {
    const { getByTestId } = render(<HomePage />);
    const circle = getByTestId('circle') as HTMLElement;

    expect(circle.style.display).toBe('none');

    fireEvent.click(circle);

    await waitFor(() => {
      expect(circle.style.display).not.toBe('none');
    });
  });
});
