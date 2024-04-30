import * as Styled from "./styles";
import "./styles.css";

export type AboutImageFloatProps = {
  src: string;
  alt: string;
  className: string;
};
export default function AboutImageFloat({
  src,
  alt,
  className,
}: AboutImageFloatProps) {
  return <Styled.ImageFloat src={src} alt={alt} className={className} />;
}
