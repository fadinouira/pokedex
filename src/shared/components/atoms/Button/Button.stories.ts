import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.type';

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Action/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component with support for different sizes and variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed inside the button',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary'] as ButtonVariant[],
      description: 'Selects the button style variant',
      table: {
        type: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'] as ButtonSize[],
      description: 'Controls the button size',
      table: {
        type: { summary: 'small | medium | large' },
      },
    },
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
