import type { Meta } from '@storybook/react';
import {
  RiftlyModalCloseButton,
  IRiftlyModalCloseButton,
} from './RiftlyModalCloseButton';

const Story: Meta<IRiftlyModalCloseButton> = {
  component: RiftlyModalCloseButton,
  title: 'primitives/Buttons/RiftlyModalCloseButton',
};
export default Story;

export const Default = {
  args: {},
};
