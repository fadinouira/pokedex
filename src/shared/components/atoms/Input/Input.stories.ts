import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { InputProps } from './Input.type';

const meta: Meta<InputProps> = {
  title: 'Atoms/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable `Input` component that provides a simple, accessible text input field.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'radio', options: ['default'] },
      description:
        'The visual state of the input field. Currently, the only available state is "default".',
    },
    inputSize: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      description: 'The size of the input field. Choose between "small", "medium", or "large".',
    },
  },
};

export default meta;

export const Default: StoryObj<InputProps> = {
  args: {
    state: 'default',
    inputSize: 'medium',
  },
};

export const Small: StoryObj<InputProps> = {
  args: {
    state: 'default',
    inputSize: 'small',
  },
};

export const Large: StoryObj<InputProps> = {
  args: {
    state: 'default',
    inputSize: 'large',
  },
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    state: 'default',
    inputSize: 'medium',
    disabled: true,
  },
};
