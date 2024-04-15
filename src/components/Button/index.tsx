import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor?: boolean;
  textColor?: boolean;
}
export default function Button({ children, backgroundColor = true, textColor = true }: ButtonProps) {
  return(
    <Styled.Button backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </Styled.Button>
  );
};
