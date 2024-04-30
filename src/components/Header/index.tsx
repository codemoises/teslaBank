import MobileNavBar from "../MobileNavBar";
import NavBar from "../NavBar";
import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.Header>
      <NavBar />
      <MobileNavBar />
    </Styled.Header>
  );
}
