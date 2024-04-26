import * as Styled from './styles';

export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.P>
          Copyright © 2024 <span>Moises Cruz</span>. Todos os direitos
          reservados.
        </Styled.P>
        <Styled.Div>
          <Styled.P2>
            Powered by
          </Styled.P2>
          <Styled.Image src={"/assets/images/logomoises.svg"} alt={"logo footer"} width={"40px"} />
        </Styled.Div>
      </Styled.Container>
    </Styled.Footer>
  );
}
