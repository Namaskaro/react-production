import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [(Story) => Story(RouterDecorator)],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
  },
};

Primary.decorators = [RouterDecorator];

export const PrimaryDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export const Secondary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
};
Secondary.decorators = [RouterDecorator];
export const SecondaryDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];

export const Red: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED,
  },
};
Red.decorators = [RouterDecorator];
export const RedDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED,
  },
};

RedDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
