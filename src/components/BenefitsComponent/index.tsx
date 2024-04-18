import React from 'react';
import * as Styled from './styles';

export type BenefitsComponentProps = {
  children: React.ReactNode;
}

export default function BenefitsComponent({ children }: BenefitsComponentProps) {
  return(
      <Styled.BenefitsContent>
        <img src="/assets/icons/right.svg" alt="Ícone" />
        <Styled.P>
          {children}
        </Styled.P>
      </Styled.BenefitsContent>
  );
}
