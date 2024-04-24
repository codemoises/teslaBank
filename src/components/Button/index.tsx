import React from "react";
import * as Styled from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor?: boolean;
  textColor?: boolean;
  textColorBlack?: boolean;
  hover?: boolean;
  border?: boolean;
  borderRadius?: boolean;
  height?: string;
  icon?: boolean;
  src?: string;
  alt?: string;
  media?: boolean;
};

export default function Button(
  {
    children,
    backgroundColor = true,
    textColor = true,
    textColorBlack = false,
    hover = false,
    border = false,
    borderRadius = false,
    height,
    icon = false, src, alt,
    media = false
  }: ButtonProps
) {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      textColor={textColor}
      textColorBlack={textColorBlack}
      hover={hover}
      height={height}
      border={border}
      borderRadius={borderRadius}
      icon={icon}
      media={media}
    >
      {children}
      {icon && (
        <Styled.Div>
          <Styled.IconButton src={src} alt={alt} />
        </Styled.Div>
        )}
    </Styled.Button>
  );
}
