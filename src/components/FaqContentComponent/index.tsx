import * as Styled from "./styles";
import "./styles.css";

export type FaqContentComponentProps = {
  question: string;
  className: string;
  onclick: () => void;
  classNamePanel: string;
};

export default function FaqContentComponent({
  question,
  className,
  onclick,
  classNamePanel,
}: FaqContentComponentProps) {
  return (
    <Styled.FaqContent className={className}>
      <Styled.Article>
        <Styled.Accordion onClick={onclick}>
          <Styled.ContentLeft>
            <Styled.ImageIconFaq
              src="/assets/icons/smartphone.svg"
              alt="Ícone de celular"
              className={"icon-faq"}
              width={"24px"}
              height={"24px"}
            />
            <Styled.Question>
              <Styled.H4>{question}</Styled.H4>
            </Styled.Question>
          </Styled.ContentLeft>
          <div className="container-img">
            <Styled.ImageIconAccordion
              src="/assets/icons/arrow.svg"
              alt="Ícone de seta"
              className="accordion-img"
              width={"24px"}
              height={"24px"}
            />
          </div>
        </Styled.Accordion>
        <Styled.Panel className={classNamePanel}>
          <Styled.P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Styled.P>
        </Styled.Panel>
      </Styled.Article>
    </Styled.FaqContent>
  );
}
