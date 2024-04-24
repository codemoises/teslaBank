import DepositionContent from "../DepositionContent";
import * as Styled from "./styles";

export default function Depositions() {
  return (
    <Styled.Depositions>
      <Styled.Container>
        <h6>#depoimentos</h6>
        <Styled.H2>
          TeslaBank fora das telinhas:
          <br />
          <span>Veja o que estão falam sobre nós.</span>
        </Styled.H2>
        <Styled.DepositionsContainer>
          <DepositionContent
            title={"Nikola Tesla"}
            description={
              "Estou realmente impressionado com a qualidade do serviço do TeslaBank. Desde que comecei a usá-lo, todas as minhas transações financeiras ficaram mais fáceis e ágeis."
            }
          />
          <DepositionContent
            title={"Steve Jobs"}
            description={
              "O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não preciso mais enfrentar filas em agências bancárias ou lidar com taxas e tarifas absurdas."
            }
          />
          <DepositionContent
            title={"Alan Turing"}
            description={
              "Eu era bastante cético em relação ao banco digital, mas decidi experimentar por curiosidade. Fiquei surpreso com a facilidade e segurança das transações, além de todas as funcionalidades exclusivas oferecidas."
            }
          />
        </Styled.DepositionsContainer>
      </Styled.Container>
    </Styled.Depositions>
  );
}
