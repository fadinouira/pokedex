import { COLORS_TOKENS } from '@/config';
import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';
import { InputLabelProps } from './InputLabel.type';

const meta: Meta<InputLabelProps> = {
  title: 'Atoms/Form/InputLabel',
  component: InputLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable `InputLabel` component that allows setting the label text and color.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed inside the InputLabel, typically describing the input field.',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the color of the label text using color tokens.',
      table: {
        type: { summary: 'ColorToken' },
        defaultValue: { summary: 'text-label' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<InputLabelProps> = {
  args: {
    label: 'Email',
  },
};

export const CustomColor: StoryObj<InputLabelProps> = {
  args: {
    label: 'Input Label',
    color: 'brand-primary',
  },
};
