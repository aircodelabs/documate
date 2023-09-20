import type { Meta, StoryObj } from '@storybook/react';

import { Documate } from './Documate';

const meta: Meta<typeof Documate> = {
  component: Documate,
};

export default meta;
type Story = StoryObj<typeof Documate>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return (<Documate/>);
  }
};

