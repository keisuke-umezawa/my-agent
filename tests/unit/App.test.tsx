import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../src/App';

describe('App', () => {
  it('renders a blank page', () => {
    render(<App />);
    
    const mainContainer = document.querySelector('.min-h-screen');
    expect(mainContainer).toBeTruthy();
    
    expect(mainContainer?.classList.contains('flex')).toBe(true);
    expect(mainContainer?.classList.contains('items-center')).toBe(true);
    expect(mainContainer?.classList.contains('justify-center')).toBe(true);
    
    expect(mainContainer?.textContent).toBe('');
  });
});
