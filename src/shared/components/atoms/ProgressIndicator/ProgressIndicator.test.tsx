import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { ProgressIndicator } from './ProgressIndicator';

test('renders progress indicator', () => {
  render(<ProgressIndicator value={50} max={100} />);

  const progress = screen.getByTestId('progress-indicator'); // Ensures accessibility
  expect(progress).toBeInTheDocument();
});

test('applies correct width style based on value and max', () => {
  render(<ProgressIndicator value={50} max={100} />);

  const progressBar = screen.getByTestId('progress-indicator');
  expect(progressBar).toHaveStyle('--current-width: 50%');
});

test('caps value at max', () => {
  render(<ProgressIndicator value={120} max={100} />);

  const progressBar = screen.getByTestId('progress-indicator');
  expect(progressBar).toHaveStyle('--current-width: 100%');
});

test('handles value below 0', () => {
  render(<ProgressIndicator value={-20} max={100} />);

  const progressBar = screen.getByTestId('progress-indicator');
  expect(progressBar).toHaveStyle('--current-width: 0%');
});

test('applies custom color', () => {
  render(<ProgressIndicator value={100} max={100} color="pokemon-fire" />);

  const fillElement = screen.getByTestId('progress-indicator-fill');
  expect(fillElement).toHaveStyle('background-color: var(--color-pokemon-fire)');
});
