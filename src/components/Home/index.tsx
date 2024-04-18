import BenefitsComponent from "../BenefitsComponent";
import Button from "../Button";
import HomeGroupIcon from "../HomeGroupIcon";
import * as Styled from "./styles";

export default function Home() {
  return (
    <Styled.Home>
      <Styled.Container>
        <Styled.HomeContentLeft>
          <Styled.ContentLeft>
            <Styled.H1>
              TeslaBank
              <br /> seu banco digital.
            </Styled.H1>
            <Styled.HomeDescription>
              Com TeslaBank, você pode realizar transferências bancárias com
              zero taxa e pagar suas contas.
            </Styled.HomeDescription>
            <Styled.HomeBenefits>
              <Styled.Benefits>
                <BenefitsComponent children={"Transferência instantânea"} />
                <BenefitsComponent children={"Sem taxas absurdas"} />
              </Styled.Benefits>
              <Styled.Benefits>
                <BenefitsComponent children={"Pagamentos em todo o mundo"} />
                <BenefitsComponent children={"100% pensando em você"} />
              </Styled.Benefits>
            </Styled.HomeBenefits>
            <Styled.HomeGroup>
              <Button
                children={"Abrir uma conta"}
                backgroundColor
                borderRadius
                hover
                textColor={false}
                height={"60px"}
                icon
                media
                src="/assets/icons/arrow-right.svg"
                alt="Ícone de seta"
              />
              <Styled.Div>
                <HomeGroupIcon src="/assets/icons/apple.svg" alt="Ícone" />
                <HomeGroupIcon src="/assets/icons/playstore.svg" alt="Ícone" />
              </Styled.Div>
            </Styled.HomeGroup>
          </Styled.ContentLeft>
        </Styled.HomeContentLeft>
        <Styled.HomeContentRight>
          <Styled.CardImg src="/assets/images/cards.svg" alt="cartão TeslaBank frente" />
        </Styled.HomeContentRight>
      </Styled.Container>
    </Styled.Home>
  );
}
