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
    defaultActiveIndex: {
      control: 'number',
      description: 'Defines the default active tab index.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the Tabs.',
      table: {
        type: { summary: 'TabSize' },
        defaultValue: { summary: 'medium' },
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
    backgroundColor: {
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
    items: [
      { label: 'Tab 1', content: 'Content for Tab 1' },
      { label: 'Tab 2', content: 'Content for Tab 2' },
    ],
  },
};

export const WithCustomColors: StoryObj<TabsProps> = {
  args: {
    items: [
      { label: 'Tab 1', content: 'Content for Tab 1' },
      { label: 'Tab 2', content: 'Content for Tab 2' },
    ],
    color: 'text-default',
    backgroundColor: 'brand-primary-disabled',
  },
};

export const LargeTabs: StoryObj<TabsProps> = {
  args: {
    items: [
      { label: 'Tab 1', content: 'Content for Tab 1' },
      { label: 'Tab 2', content: 'Content for Tab 2' },
    ],
    size: 'large',
  },
};
