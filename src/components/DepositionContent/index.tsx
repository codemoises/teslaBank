import * as Styled from "./styles";

export type DepositionContentProps = {
  title: string;
  description: string;
};

export default function DepositionContent({
  title,
  description,
}: DepositionContentProps) {
  return (
    <Styled.Div>
      <Styled.H4>{title}</Styled.H4>
      <Styled.P>{description}</Styled.P>
    </Styled.Div>
  );
}
