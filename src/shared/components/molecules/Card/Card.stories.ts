import type { Meta, StoryObj } from '@storybook/react';
import { COLORS_TOKENS } from '@/app/config';
import { Card } from './Card';
import { CardProps } from './Card.type';

const meta: Meta<CardProps> = {
  title: 'Molecules/Feedback/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible `Card` component with customizable background color.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the background color of the card.',
      table: {
        type: { summary: 'ColorToken' },
        defaultValue: { summary: 'bg-light' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<CardProps> = {
  args: {
    children: 'This is a card',
    style: {
      width: '400px',
    },
  },
};

export const WithCustomBackground: StoryObj<CardProps> = {
  args: {
    children: 'Card with custom background',
    backgroundColor: 'brand-primary',
    style: {
      width: '400px',
    },
  },
};
