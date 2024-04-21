import CardInnovation from "../CardInnovation";
import * as Styled from "./styles";

export default function Innovation() {
  return (
    <Styled.Innovation>
      <Styled.Container>
        <h6>#inovação</h6>
        <Styled.H2>
          Quais as vantagens
          <br /> de usar <Styled.Span>TeslaBank</Styled.Span>?
        </Styled.H2>
        <Styled.ContainerCards>
          <Styled.CardsInnovationGrid>
            <CardInnovation
              src={"/assets/icons/credit-card.svg"}
              alt={"ícone de cartão"}
              title={"Cartão TeslaBank"}
              description={
                "O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia."
              }
              href={"#"}
              link={"Veja as opções"}
            />
            <CardInnovation
              src={"/assets/icons/shopping-cart.svg"}
              alt={"ícone de carrinho"}
              title={"Investimentos"}
              description={
                "O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento e cashback."
              }
              href={"#"}
              link={"Conheça agora"}
            />
            <CardInnovation
              src={"/assets/icons/clock.svg"}
              alt={"ícone de relógio"}
              title={"Atendimento 24h"}
              description={
                "No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana."
              }
              href={"#"}
              link={"Veja as opções"}
            />
            <CardInnovation className="hidden" />
          </Styled.CardsInnovationGrid>
          <Styled.CardsInnovationGrid>
            <CardInnovation className="hidden" />
            <CardInnovation
              src={"/assets/icons/shield.svg"}
              alt={"ícone de escudo"}
              title={"Segurança"}
              description={"Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado."}
              href={"#"}
              link={"Conheça agora"}
            />
            <CardInnovation
              src={"/assets/icons/percent.svg"}
              alt={"ícone de porcentagem"}
              title="Sem taxas"
              description={"Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas."}
              href={"#"}
              link={"Como funciona"}
            />
            <CardInnovation
              src={"/assets/icons/gift.svg"}
              alt={"ícone de presente"}
              title="Receba prêmios"
              description={"Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios."}
              href={"#"}
              link={"Veja como"}
            />
          </Styled.CardsInnovationGrid>
        </Styled.ContainerCards>
      </Styled.Container>
    </Styled.Innovation>
  );
}
