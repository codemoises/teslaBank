import { useCallback, useEffect, useState } from 'react';
import Logo from '../Logo';
import * as Styled from './styles';
import './styles.css';

export default function MobileNavBar() {

const [menuOpen, setMenuOpen] = useState(false);

const configureMenu = useCallback(() => {
  setMenuOpen(true);

},[]);

useEffect(() => {

  if (menuOpen) {
    // document.getElementById("menu-mobile");
    document.body.querySelector(".menu-mobile")?.classList.add("animationTransform");

  //   menuMobile.addEventListener("click", function () {
  //   const menuMobileOptions = document.getElementById("menu-mobile-options");
  //   menuMobileOptions.classList.toggle("active-menu");
  //   menuMobile.classList.toggle("animationTransform");
  //   document.body.classList.toggle("overflow-body");
  // });
  }
}, [menuOpen]);

  return(
    <Styled.MobileNavBar>
        <Logo />
        <Styled.MenuMobile className="menu-mobile" onClick={() => configureMenu()}>
          <Styled.Div></Styled.Div>
          <Styled.Div></Styled.Div>
        </Styled.MenuMobile>
        {/* <Styled.Nav>
          <Styled.Ul>
            <Styled.Li>
              <Styled.Link>
                Benefícios
              </Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link>
                Conta digital
              </Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link>
                Suporte
              </Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link>
                Blog
              </Styled.Link>
            </Styled.Li>
          </Styled.Ul>
        </Styled.Nav> */}
      </Styled.MobileNavBar>
  );
}
