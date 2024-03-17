import  Dialog  from '../components/dialogs/Dialog';

import { within, userEvent, expect } from '@storybook/test';
import { action } from '@storybook/addon-actions';


export default {
  title: 'App/Dialog',
  component: Dialog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Basic = {
  args: {
    title: "Test title"
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const dialog = canvas.getByTestId("dialog");
    await expect(dialog).toBeInTheDocument();

    const title = screen.getByText("Test title");
    expect(title).toBeInTheDocument();
  }


};
