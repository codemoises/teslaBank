import BlogContentComponent from "../BlogContentComponent";
import * as Styled from "./styles";

export default function Blog() {
  return (
    <Styled.Blog>
      <Styled.Container>
        <Styled.TopRow>
          <Styled.H2>Blog</Styled.H2>
          <Styled.Link>
            <Styled.P>Todas as postagens</Styled.P>
            <Styled.Image
              src={"/assets/icons/arrow-2.svg"}
              alt={"Ícone de uma flecha apontada para a direita"}
            />
          </Styled.Link>
        </Styled.TopRow>
        <Styled.ContainerPost>
          <BlogContentComponent
            src={"/assets/images/1.png"}
            alt={"Imagem teslabank startup"}
            title={"Como começar a usar o TeslaBank para sua startup"}
            description={
              "Descubra como a sua startup pode se beneficiar dos serviços financeiros do TeslaBank. Nesta postagem, apresentamos um guia fácil para ajudá-lo a começar a usar o TeslaBank."
            }
          />
          <BlogContentComponent
            src={"/assets/images/2.png"}
            alt={"Imagem curiosidades teslabank"}
            title={"10 coisas que ninguém te contou sobre o TeslaBank"}
            description={
              "Você está pensando em usar o TeslaBank para gerenciar suas finanças pessoais? Antes de decidir, confira esta postagem para descobrir 10 coisas que ninguém te contou sobre o TeslaBank."
            }
          />
          <BlogContentComponent
            src={"/assets/images/3.png"}
            alt={"Imagem dicas de poupança"}
            title={"7 maneiras de melhorar seus hábitos de poupança"}
            description={
              "Você deseja economizar dinheiro, mas acha difícil manter bons hábitos de poupança? Confira esta postagem para descobrir sete maneiras eficazes de melhorar seus hábitos de poupança."
            }
          />
        </Styled.ContainerPost>
      </Styled.Container>
    </Styled.Blog>
  );
}
