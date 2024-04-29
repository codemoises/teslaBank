import { useCallback, useEffect, useState } from "react";
import FaqContentComponent from "../FaqContentComponent";
import * as Styled from "./styles";

export default function Faq() {

  const [panelOpen, setPanelOpen] = useState(false);
  const [panelOpen2, setPanelOpen2] = useState(false);
  const [panelOpen3, setPanelOpen3] = useState(false);

  const configurePanel = useCallback(() => {
    setPanelOpen((prev) => !prev);
  }, []);

  const configurePanel2 = useCallback(() => {
    setPanelOpen2((prev) => !prev);
  }, []);

  const configurePanel3 = useCallback(() => {
    setPanelOpen3((prev) => !prev);
  }, []);

  useEffect(() => {
    if (panelOpen) {
      document.body
        .querySelector(".accordion")
        ?.classList.add("active");
      document.body.querySelector(".panel")?.classList.add("panelHidden");
    } else {
      document.body.querySelector(".accordion")?.classList.remove("active");
      document.body.querySelector(".panel")?.classList.remove("panelHidden");
    }

    if (panelOpen2) {
      document.body
        .querySelector(".accordion2")
        ?.classList.add("active2");
      document.body.querySelector(".panel2")?.classList.add("panelHidden");
    } else {
      document.body.querySelector(".accordion2")?.classList.remove("active2");
      document.body.querySelector(".panel2")?.classList.remove("panelHidden");
    }

    if (panelOpen3) {
      document.body
        .querySelector(".accordion3")
        ?.classList.add("active3");
      document.body.querySelector(".panel3")?.classList.add("panelHidden");
    } else {
      document.body.querySelector(".accordion3")?.classList.remove("active3");
      document.body.querySelector(".panel3")?.classList.remove("panelHidden");
    }
  }, [panelOpen, panelOpen2, panelOpen3]);

  return (
    <Styled.Faq>
      <Styled.Container>
        <Styled.TopRow>
          <h6>#ajuda</h6>
          <Styled.H2>Ficou alguma dúvida</Styled.H2>
          <Styled.P>
            Confira nossa lista de perguntas frequentes que recebemos
          </Styled.P>
        </Styled.TopRow>
        <Styled.FaqOptionContainer>
          <FaqContentComponent
            question="Como posso abrir uma conta bancária?" onclick={() => configurePanel()} className={"accordion"} classNamePanel={"panel"} />
          <FaqContentComponent
            question="Qual é o meu saldo atual?" onclick={() => configurePanel2()} className={"accordion2"} classNamePanel={"panel2"}          />
          <FaqContentComponent
            question="Como faço para transferir dinheiro para outra conta?" onclick={() => configurePanel3()} className={"accordion3"} classNamePanel={"panel3"} />
        </Styled.FaqOptionContainer>
      </Styled.Container>
    </Styled.Faq>
  );
}
