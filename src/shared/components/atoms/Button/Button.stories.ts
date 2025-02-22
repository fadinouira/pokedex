import { fn } from '@storybook/test';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    label: 'Button',
  },
};

export const Small = {
  args: {
    label: 'Button',
  },
};
