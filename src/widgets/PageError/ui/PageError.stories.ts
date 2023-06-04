import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
  title: 'widget/PageError',
  component: PageError,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {},
};
Light.decorators = [RouterDecorator];
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
