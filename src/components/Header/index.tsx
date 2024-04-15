import Button from '../Button';
import * as Styled from './styles';

export default function Header() {
  return(
    <Styled.Header>
      <Styled.NavBar>
        <Styled.Logo>
          <Styled.H1>
            teslabank.
          </Styled.H1>
        </Styled.Logo>
        <Styled.Nav>
          <Styled.Ul>
            <Styled.Li>
              <Styled.Link>
                Benefícios
              </Styled.Link>
              <Styled.Link>
                Conta digital
              </Styled.Link>
              <Styled.Link>
                Suporte
              </Styled.Link>
              <Styled.Link>
                Blog
              </Styled.Link>
            </Styled.Li>
          </Styled.Ul>
        </Styled.Nav>
        <Styled.Div>
          <Button children="Entrar" backgroundColor={false} textColor={true} />
          <Button children="Abrir conta" backgroundColor textColor={false} />
        </Styled.Div>
      </Styled.NavBar>
    </Styled.Header>
  );
};
