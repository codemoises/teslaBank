import AboutContentComponent from "../AboutContentComponent";
import AboutImageFloat from "../AboutImageFloat";
import * as Styled from "./styles";

export default function About() {
  return (
    <Styled.About>
      <Styled.Container>
        <Styled.AboutContentLeft>
          <Styled.SmartphoneImg
            src="/assets/images/smartphone.png"
            alt="smartphone"
          />
          <AboutImageFloat
            src="/assets/icons/checked.svg"
            alt="Ícone confirmado"
            className="float-one icon-one"
          />
          <AboutImageFloat
            src="/assets/icons/mouse-pointer.svg"
            alt="ícone cursor mouse"
            className="float-two icon-two"
          />
          <AboutImageFloat
            src="/assets/icons/heart.svg"
            alt="ícone coração"
            className="float-three icon-three"
          />
        </Styled.AboutContentLeft>
        <Styled.AboutContentRight>
          <Styled.H2>
            Abra sua conta <span>gratuita</span>!
          </Styled.H2>
          <Styled.P>
            Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
            TEDs e transferências para todos os bancos sem pagar nada.
          </Styled.P>
          <Styled.ContentRight>
            <AboutContentComponent
              src="/assets/icons/money.svg"
              alt="ícone dinheiro"
              title="Seu dinheiro rendendo mais"
              description="Rendem mais que a poupança e você resgata quando quiser."
            />
            <AboutContentComponent
              src="/assets/icons/smartphone.svg"
              alt="ícone celular"
              title="Conta digital 100% grátis"
              description="Transferências, boletos de depósito e outros serviços gratuitos."
              border
            />
            <AboutContentComponent
              src="/assets/icons/smile.svg"
              alt="ícone feliz"
              title="Cartão sem anuidade"
              description="Conta digital com cartão de crédito sem anuidade e sem complicação."
            />
          </Styled.ContentRight>
        </Styled.AboutContentRight>
      </Styled.Container>
    </Styled.About>
  );
}
