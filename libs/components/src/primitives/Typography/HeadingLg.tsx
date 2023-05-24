import { Heading, HeadingProps } from '@chakra-ui/react';
import { FC } from 'react';

export const HeadingLg: FC<HeadingProps> = (props) => {
  return <Heading size="md" {...props} />;
};
