import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};
Light.decorators = [RouterDecorator];
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
