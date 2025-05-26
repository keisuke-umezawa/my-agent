import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../src/App';

vi.mock('../../src/api', () => ({
  checkHealth: vi.fn().mockResolvedValue({ status: 'ok', message: 'API is running' }),
  getUsers: vi.fn().mockResolvedValue([]),
  getTasks: vi.fn().mockResolvedValue([]),
  createUser: vi.fn(),
  createTask: vi.fn(),
}));

describe('App', () => {
  it('renders the FastAPI + React Example page', () => {
    render(<App />);
    
    const mainContainer = document.querySelector('.min-h-screen');
    expect(mainContainer).toBeTruthy();
    
    expect(screen.getByText('FastAPI + React Example')).toBeTruthy();
    
    expect(screen.getByText('API Status')).toBeTruthy();
    
    expect(screen.getByRole('tab', { name: 'Users' })).toBeTruthy();
    expect(screen.getByRole('tab', { name: 'Tasks' })).toBeTruthy();
  });
});
