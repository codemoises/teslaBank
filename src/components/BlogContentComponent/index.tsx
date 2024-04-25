import * as Styled from './styles';

export type BlogContentComponentProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function BlogContentComponent({ src, alt, title, description }: BlogContentComponentProps) {
  return(
    <Styled.BlogContent>
      <Styled.Image src={src} alt={alt} />
      <Styled.H3>
        {title}
      </Styled.H3>
      <Styled.P>
        {description}
      </Styled.P>
    </Styled.BlogContent>
  );
}