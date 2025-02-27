import { COLORS_TOKENS } from '@/app/config';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';
import { ProgressIndicatorProps } from './ProgressIndicator.type';

const meta: Meta<ProgressIndicatorProps> = {
  title: 'Atoms/Feedback/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A progress indicator component that visually represents completion percentage.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Current progress value',
      table: {
        type: { summary: 'number' },
      },
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum value of progress',
      table: {
        type: { summary: 'number' },
      },
    },
    color: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the text color of the Tag using color tokens.',
      table: {
        type: { summary: 'ColorToken' },
        defaultValue: { summary: 'brand-primary-foreground' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<ProgressIndicatorProps> = {
  args: {
    value: 30,
  },
};

export const CustomColor: StoryObj<ProgressIndicatorProps> = {
  args: {
    value: 75,
    color: 'pokemon-steel',
  },
};

export const Full: StoryObj<ProgressIndicatorProps> = {
  args: {
    value: 100,
  },
};
