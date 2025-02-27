import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import { Button } from './Button';

test('renders the button with label', () => {
  render(<Button label="Click Me" />);

  // Check if the button appears in the document
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
});

test('renders the button with children instead of label', () => {
  render(<Button>Click Me</Button>);

  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument();
});

test('applies variant and size classes', () => {
  render(<Button label="Styled Button" variant="primary" size="large" />);

  const button = screen.getByTestId('button');

  expect(button).toHaveClass('button');
  expect(button).toHaveClass('primary');
  expect(button).toHaveClass('large');
});

test('calls onClick when clicked', async () => {
  const onClick = vi.fn();
  render(<Button label="Click Me" onClick={onClick} />);

  const button = screen.getByTestId('button');
  await userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});
