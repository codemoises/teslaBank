import FaqContentComponent from "../FaqContentComponent";
import * as Styled from "./styles";

export default function Faq() {
  return (
    <Styled.Faq>
      <Styled.Container>
        <Styled.TopRow>
          <h6>#ajuda</h6>
          <Styled.H2>Ficou alguma dúvida</Styled.H2>
          <Styled.P>
            Confira nossa lista de perguntas frequentes que recebemos
          </Styled.P>
        </Styled.TopRow>
        <Styled.FaqOptionContainer>
          <FaqContentComponent
            question="Como posso abrir uma conta bancária?"
          />
          <FaqContentComponent
            question="Qual é o meu saldo atual?"
          />
          <FaqContentComponent
            question="Como faço para transferir dinheiro para outra conta?"
          />
        </Styled.FaqOptionContainer>
      </Styled.Container>
    </Styled.Faq>
  );
}
