import Button from "../Button";
import * as Styled from "./styles";

export default function Cards() {
  return (
    <Styled.Cards>
      <Styled.Container>
        <Styled.H3>#cartões</Styled.H3>
        <Styled.H2>Cartão perfeito para suas necessidades.</Styled.H2>
        <Styled.P>
          Encontre o cartão perfeito para suas necessidades financeiras. Seja
          para viagens ou compras do dia a dia, temos uma opção que se adapta a
          você.
        </Styled.P>
        <Styled.Image
          src={"/assets/images/cards-2.svg"}
          alt={"Cartões TeslaBank"}
        />
        <Styled.Div>
          <Button
            children={"Abrir uma conta"}
            textColor={false}
            hover
            borderRadius
            height={"56px"}
          />
          <Button
            children={"Comparar cartões"}
            backgroundColor={false}
            borderRadius
            height={"56px"}
            border
            textColorBlack
          />
        </Styled.Div>
      </Styled.Container>
    </Styled.Cards>
  );
}
