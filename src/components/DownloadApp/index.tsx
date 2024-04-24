import ButtonDownloadApp from "../ButtonDownloadApp";
import * as Styled from "./styles";
import './styles.css';

export default function DownloadApp() {
  return (
    <Styled.DownloadApp>
      <Styled.Container>
        <Styled.ContentLeft>
          <Styled.H3>
            Uma nova experiência
            <br />
            em <span>serviços financeiros</span>.<br />
          </Styled.H3>
          <Styled.P>
            Nossa abordagem inovadora e personalizada oferece uma experiência
            única para atender às suas necessidades.
          </Styled.P>
          <Styled.ButtonDownloadsContainer>
            <ButtonDownloadApp
              href={"#"}
              src={"/assets/icons/apple-light.svg"}
              alt={"Ícone da Apple"}
              app={"Apple Store"}
            />
            <ButtonDownloadApp
              href={"#"}
              src={"/assets/icons/playstore-light.svg"}
              alt={"Ícone da Play Store"}
              app={"Google Play"}
            />
          </Styled.ButtonDownloadsContainer>
        </Styled.ContentLeft>
        <Styled.ContentRight>
          <Styled.CanvasBasic className="app-teslabank">
            <Styled.Image src={"/assets/icons/download-logo.svg"} alt={"Logo da TeslaBank"} width="124px" height="124px" />
          </Styled.CanvasBasic>
        </Styled.ContentRight>
      </Styled.Container>
    </Styled.DownloadApp>
  );
}
