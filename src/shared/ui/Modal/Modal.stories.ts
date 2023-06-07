import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

// import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium sunt repellendus amet architecto eius nemo assumenda id praesentium doloremque!',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium sunt repellendus amet architecto eius nemo assumenda id praesentium doloremque!',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
