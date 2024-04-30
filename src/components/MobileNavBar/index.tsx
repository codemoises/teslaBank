import { useCallback, useEffect, useState } from "react";
import Logo from "../Logo";
import * as Styled from "./styles";
import "./styles.css";

export default function MobileNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const configureMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document
        .getElementById("menu-mobile-options")
        ?.classList.toggle("active-menu");
      document.body
        .querySelector(".menu-mobile")
        ?.classList.add("animationTransform");
      document.body.classList.toggle("overflow-body");
    } else {
      document
        .getElementById("menu-mobile-options")
        ?.classList.remove("active-menu");
      document.body
        .querySelector(".menu-mobile")
        ?.classList.remove("animationTransform");
      document.body.classList.remove("overflow-body");
    }
  }, [menuOpen]);

  return (
    <Styled.MobileNavBar>
      <Logo />
      <Styled.MenuMobile
        className="menu-mobile"
        onClick={() => configureMenu()}
      >
        <Styled.Div></Styled.Div>
        <Styled.Div></Styled.Div>
      </Styled.MenuMobile>
      <Styled.Ul id="menu-mobile-options">
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
        <Styled.Li>
          <Styled.Link>Criar sua conta</Styled.Link>
        </Styled.Li>
      </Styled.Ul>
    </Styled.MobileNavBar>
  );
}
