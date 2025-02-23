import { COLORS_TOKENS } from '@/app/config';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabsProps } from './Tabs.type';

const meta: Meta<TabsProps> = {
  title: 'Molecules/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable `Tabs` component that allows users to navigate between different content sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of tab items with labels and content.',
      table: {
        type: { summary: 'TabItem[]' },
      },
    },
    color: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the text color of the Tabs using color tokens.',
      table: {
        type: { summary: 'ColorToken' },
        defaultValue: { summary: 'brand-primary-foreground' },
      },
    },
    foregroundColor: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the background color of the Tabs using color tokens.',
      table: {
        type: { summary: 'ColorToken' },
        defaultValue: { summary: 'brand-primary' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TabsProps> = {
  args: {
    items: [{ label: 'Tab 1' }, { label: 'Tab 2' }],
  },
};

export const WithCustomColors: StoryObj<TabsProps> = {
  args: {
    items: [{ label: 'Tab 1' }, { label: 'Tab 2' }],
    color: 'text-default',
    foregroundColor: 'brand-primary-disabled',
  },
};
