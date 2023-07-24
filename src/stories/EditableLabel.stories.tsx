import { Meta, StoryObj } from '@storybook/react';
import EditableLabel from '../components/Label/EditableLabel';
import { JSX } from 'react';
import * as React from 'react';

const meta: Meta<typeof EditableLabel> = {
  component: EditableLabel,
  title: 'Editable Label',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EditableLabel>;

export const Example: Story = (
  args: JSX.IntrinsicAttributes & {
    text: string;
    onSave: (value: string) => void;
  }
) => <EditableLabel {...args} />;

Example.args = {
  text: 'hello',
  onSave: (value: string) => console.log(value),
};
