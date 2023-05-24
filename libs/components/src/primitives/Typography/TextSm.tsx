import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

export const TextSm: FC<TextProps> = (props) => {
  return <Text fontSize="sm" {...props} />;
};
