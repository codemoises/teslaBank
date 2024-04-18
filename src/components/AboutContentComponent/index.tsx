import * as Styled from './styles';

export type AboutContentComponentProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  border?: boolean;
}

export default function AboutContentComponent({ src, alt, title, description, border = false }: AboutContentComponentProps) {
  return(
    <Styled.Div border={border}>
      <Styled.Img src={src} alt={alt} width={"24px"} height={"24px"} />
      <Styled.TextDiv>
        <Styled.H4>
          {title}
        </Styled.H4>
        <Styled.P>
          {description}
        </Styled.P>
      </Styled.TextDiv>
    </Styled.Div>
  );
}
