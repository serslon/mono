import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

export const TextMd: FC<TextProps> = (props) => {
  return <Text fontSize="md" {...props} />;
};
