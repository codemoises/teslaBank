import * as Styled from './styles';

type HomeGroupIconProps = {
  src: string;
  alt: string;
}

export default function HomeGroupIcon({ src, alt }: HomeGroupIconProps) {
  return(
    <Styled.Div>
      <Styled.Img src={src} alt={alt} />
    </Styled.Div>
  );
}
