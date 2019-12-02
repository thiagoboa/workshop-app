import React from "react";
import styled, { css, withTheme } from "styled-components";
import theme from "styled-theming";

const white = "#f00";
const black = "#000";

const buttonStyles = theme("mode", {
  light: css`
    background: ${white};
    color: ${black};
  `,
  dark: css`
    background: ${black};
    color: ${white};
  `
});

const StyledButton = styled.button`
  ${buttonStyles}
  border-radius: 3px;
`;

function Button(props) {
  console.log("App theme: ", props.theme);
  return <StyledButton>{props.children}</StyledButton>;
}

export default withTheme(Button);
