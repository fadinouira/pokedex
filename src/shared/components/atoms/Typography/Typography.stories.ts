import {
  COLORS_TOKENS,
  FONT_SIZE_TOKENS,
  FONT_TOKENS,
  FONT_WEIGHT_TOKENS,
  LETTER_SPACING_TOKENS,
  LINE_HEIGHT_TOKENS,
} from '@/config';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { TypographyProps } from './Typography.type';

const meta: Meta<TypographyProps> = {
  title: 'Atoms/Feedback/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible `Typography` component that supports multiple variants, colors, and font styles using design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: 'select',
      options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
      description: 'The HTML tag used for rendering the typography element.',
      table: {
        type: { summary: 'keyof JSX.IntrinsicElements' },
        defaultValue: { summary: 'div' },
      },
    },
    label: {
      control: 'text',
      description: 'Text content of the typography component.',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: 'select',
      options: COLORS_TOKENS,
      description: 'Defines the color of the text using color tokens.',
      table: {
        type: { summary: 'ColorToken' },
      },
    },
    font: {
      control: 'select',
      options: FONT_TOKENS,
      description: 'Defines the font family using font tokens.',
      table: {
        type: { summary: 'FontToken' },
      },
    },
    fontSize: {
      control: 'select',
      options: FONT_SIZE_TOKENS,
      description: 'Defines the font size using size tokens.',
      table: {
        type: { summary: 'FontSizeToken' },
      },
    },
    fontWeight: {
      control: 'select',
      options: FONT_WEIGHT_TOKENS,
      description: 'Defines the font weight using weight tokens.',
      table: {
        type: { summary: 'FontWeightToken' },
      },
    },
    lineHeight: {
      control: 'select',
      options: LINE_HEIGHT_TOKENS,
      description: 'Defines the line height using line-height tokens.',
      table: {
        type: { summary: 'LineHeightToken' },
      },
    },
    letterSpacing: {
      control: 'select',
      options: LETTER_SPACING_TOKENS,
      description: 'Defines the letter spacing using letter-spacing tokens.',
      table: {
        type: { summary: 'LetterSpacingToken' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TypographyProps> = {
  args: {
    label: 'Hello, World!',
  },
};

export const CustomTypography: StoryObj<TypographyProps> = {
  args: {
    label: 'Custom Typography',
    color: 'brand-primary',
    font: 'display',
    fontSize: '2xl',
    fontWeight: 'bold',
    lineHeight: 'xl',
    letterSpacing: 'tight',
  },
};
