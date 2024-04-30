import * as Styled from "./styles";

export type ButtonDownloadAppProps = {
  href: string;
  src: string;
  alt: string;
  app: string;
};

export default function ButtonDownloadApp({
  href,
  src,
  alt,
  app,
}: ButtonDownloadAppProps) {
  return (
    <Styled.Link href={href} rel="noopener">
      <Styled.Div>
        <Styled.Image src={src} alt={alt} width={"24px"} height={"24px"} />
      </Styled.Div>
      <Styled.P>
        Download via <br />
        <span>{app}</span>
      </Styled.P>
    </Styled.Link>
  );
}
