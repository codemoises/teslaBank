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
          <Styled.Image src={"/assets/images/moises 2.svg"} alt={"foto moises"} width={"45px"} />
        </Styled.Div>
      </Styled.Container>
    </Styled.Footer>
  );
}
