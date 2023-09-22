import type { Meta, StoryObj } from '@storybook/react';

import { Documate } from '../src/components/Documate';

const meta = {
  component: Documate,
} satisfies Meta<typeof Documate>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    endpoint: 'https://8c7b1be9gi.us.aircode.run/ask'
  }
};

export const AskSpriteJS: Story = {
  args: {
    endpoint: 'https://8c7b1be9gi.us.aircode.run/ask',
    predefinedQuestions: [
      'What is SpriteJS?',
      'How can I use SpriteJS to draw a circle?',
      'Can SpriteJS render 3D Objects?'
    ],
  },
};