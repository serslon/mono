import type { Meta } from '@storybook/react';
import { TextMd, TextSm, HeadingLg, HeadingSm } from './';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Story: Meta<any> = {
  title: 'primitives/Typography',
};
export default Story;

export const Default = {
  render: () => (
    <div>
      <HeadingLg>HeadingLg</HeadingLg>
      <HeadingSm>HeadingSm</HeadingSm>
      <TextMd>
        <b>TextMd</b>
        <br />
        Fugiat incididunt nostrud nulla minim in duis exercitation. Do cillum ad
        minim non in officia tempor aliqua sunt cupidatat cillum eiusmod
        nostrud. Sit exercitation officia elit sunt commodo velit. Aliqua esse
        cillum consectetur eu commodo mollit magna aliqua officia ad do sit.
        Laborum minim elit voluptate aute ut enim deserunt et eu fugiat qui
        nulla. Ea esse ad ad laborum laboris non cupidatat dolor nisi cillum ex
        cillum ea.
      </TextMd>
      <TextSm>
        <b>TextSm</b>
        <br />
        Sit Lorem mollit tempor et sunt voluptate eu tempor est nisi ullamco. Do
        incididunt culpa amet sit labore exercitation laborum sit id ullamco
        dolore labore ipsum elit. Qui sit deserunt duis qui culpa quis nostrud
        proident exercitation laborum pariatur labore. Fugiat cupidatat deserunt
        dolor dolore anim ea proident consequat aliquip aute mollit laborum do
        sunt.
      </TextSm>
    </div>
  ),
};
