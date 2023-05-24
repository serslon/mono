import type { Meta } from '@storybook/react';
import { RiftlyLogoWhite, RiftlyFace, RiftlyLogoWhiteText } from './';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Story: Meta<any> = {
  title: 'primitives/Logos',
};
export default Story;

export const Default = {
  render: () => (
    <div style={{ backgroundColor: 'lightgrey', padding: 16 }}>
      <h4>RiftlyLogoWhite</h4>
      <div
        style={{
          margin: '0 auto',
          width: 48,
          height: 48,
        }}
      >
        <RiftlyLogoWhite />
      </div>
      <h4>RiftlyFace</h4>
      <div
        style={{
          margin: '0 auto',
          width: 48,
          height: 48,
        }}
      >
        <RiftlyFace />
      </div>
      <h4>RiftlyLogoWhiteText</h4>
      <div
        style={{
          margin: '0 auto',
          width: 106,
          height: 48,
        }}
      >
        <RiftlyLogoWhiteText />
      </div>
    </div>
  ),
};
