import { Heading, HeadingProps, interactivity } from '@chakra-ui/react';
import { FC } from 'react';

export interface IHeadingSm {
  children: React.ReactNode;
}
export const HeadingSm: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading size="sm" {...props}>
      {children}
    </Heading>
  );
};
