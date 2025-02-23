import { COLORS_TOKENS } from '@/config';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { TagProps } from './Tag.type';

const meta: Meta<TagProps> = {
  title: 'Atoms/Feedback/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable `Tag` component that displays a label with configurable size, color, and background color.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed inside the Tag.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the Tag.',
      table: {
        type: { summary: 'TagSize' },
        defaultValue: { summary: 'medium' },
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
    backgroundColor: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the background color of the Tag using color tokens.',
      table: {
        type: { summary: 'ColorToken' },
        defaultValue: { summary: 'brand-primary' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TagProps> = {
  args: {
    label: 'Tag',
  },
};

export const Small: StoryObj<TagProps> = {
  args: {
    label: 'Small Tag',
    size: 'small',
  },
};

export const Large: StoryObj<TagProps> = {
  args: {
    label: 'Large Tag',
    size: 'large',
  },
};

export const CustomColor: StoryObj<TagProps> = {
  args: {
    label: 'Custom Color Tag',
    color: 'text-default',
  },
};

export const CustomBackgroundColor: StoryObj<TagProps> = {
  args: {
    label: 'Custom Background Tag',
    backgroundColor: 'brand-primary-disabled',
  },
};
