import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArrowButton } from './ArrowButton';
import { ArrowButtonProps } from './ArrowButton.type';

const meta: Meta<ArrowButtonProps> = {
  title: 'Atoms/Navigation/ArrowButton',
  component: ArrowButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A circular arrow button for navigation, supporting different directions and colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['left', 'right', 'up', 'down'],
      description: 'Determines the arrow direction',
      table: {
        type: { summary: 'left | right | up | down' },
      },
    },
    color: {
      control: 'text',
      description: 'Defines the button color using a design system token',
      table: {
        type: { summary: 'ColorToken' },
      },
    },
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
};

export default meta;

export const Default: StoryObj<ArrowButtonProps> = {
  args: {
    direction: 'left',
  },
};

export const Right: StoryObj<ArrowButtonProps> = {
  args: {
    direction: 'right',
  },
};

export const Up: StoryObj<ArrowButtonProps> = {
  args: {
    direction: 'up',
  },
};

export const Down: StoryObj<ArrowButtonProps> = {
  args: {
    direction: 'down',
  },
};

export const CustomColor: StoryObj<ArrowButtonProps> = {
  args: {
    direction: 'left',
    color: 'brand-primary',
  },
};
