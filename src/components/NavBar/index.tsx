import Button from "../Button";
import Logo from "../Logo";
import * as Styled from "./styles";

export default function NavBar() {
  return (
    <Styled.NavBar>
      <Logo />
      <Styled.Nav>
        <Styled.Ul>
          <Styled.Li>
            <Styled.Link>Benefícios</Styled.Link>
          </Styled.Li>
          <Styled.Li>
            <Styled.Link>Conta digital</Styled.Link>
          </Styled.Li>
          <Styled.Li>
            <Styled.Link>Suporte</Styled.Link>
          </Styled.Li>
          <Styled.Li>
            <Styled.Link>Blog</Styled.Link>
          </Styled.Li>
        </Styled.Ul>
      </Styled.Nav>
      <Styled.Div>
        <Button children="Entrar" backgroundColor={false} textColor={true} />
        <Button
          children="Abrir conta"
          backgroundColor
          textColor={false}
          hover
          borderRadius
        />
      </Styled.Div>
    </Styled.NavBar>
  );
}
