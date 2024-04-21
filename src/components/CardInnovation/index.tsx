import * as Styled from './styles';
import './styles.css';

export type CardsInnovationProps = {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  href?: string;
  link?: string;
  className?: string;
}
export default function CardInnovation({ src, alt, title, description, href, link, className }: CardsInnovationProps) {
  return(
    <Styled.Article className={className}>
      <Styled.Div>
        <Styled.Image src={src} alt={alt} width={"24px"} height={"24px"} />
      </Styled.Div>

      <Styled.H5>
        {title}
      </Styled.H5>
      <Styled.Paragraph>
        {description}
      </Styled.Paragraph>
      <Styled.Link href={href} rel='noopener'>
        {link}
      </Styled.Link>
    </Styled.Article>
  );
}
