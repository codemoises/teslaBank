import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor?: boolean;
  textColor?: boolean;
  hover?: boolean;
  borderRadius?: boolean;
}
export default function Button({ children, backgroundColor = true, textColor = true, hover = false, borderRadius = false }: ButtonProps) {
  return(
    <Styled.Button backgroundColor={backgroundColor} textColor={textColor} hover={hover} borderRadius={borderRadius}>
      {children}
    </Styled.Button>
  );
};
