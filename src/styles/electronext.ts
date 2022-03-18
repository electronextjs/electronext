import { createGlobalStyle } from "styled-components";

export const ElectroNextStyle = createGlobalStyle`
:root {
  --electronext-purple: #574AE8;
  --electronext-blue-light: #55b2fd;

  --electronext-border: #63636347;
  --electronext-overlay: #231f1f4f;

  --electronext-button-hover: #63636347;
  --electronext-button-active: #63636333;
  --electronext-button-default: #63636347;
  --electronext-button-gray: #454545;
  --electronext-button-dark: #171717;
  --electronext-button-info: #55b2fd;
  --electronext-button-succ: #4edc8d;
  --electronext-button-warn: #f1b444;
  --electronext-button-dang: #f54340;

  --electronext-button-primary: #574AE8;
  --electronext-button-secondary: #574AE8;

  --electronext-icon: #999;

  --electronext-font-primary: #cfcfcf;
  --electronext-font-secondary: #F9F9F9;
  
}

html, body, #__next {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  background-color: transparent;
  height: 100%;
  overflow: hidden;
  color: var(--electronext-font-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#__App {
  z-index: 0;
  box-sizing: border-box;
}
*::selection {
  background: var(--electronext-purple);
  color: var(--electronext-font-secondary);
}
*::-webkit-scrollbar {
  width: 0.9rem;
  background-color: transparent;
}
*::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color:  #22222299;
  border: 3px solid transparent;
  background-clip: content-box;
}
*:focus-visible {
  outline-width: 2px;
  outline-color: var(--electronext-purple);
  outline-style: solid;
}
a {
  text-decoration: none;
  color: var(--electronext-blue-light);
}
button, input, select, option {
  border: 0;
  margin: 0;
  background: var(--electronext-button-gray);
  color: var(--electronext-font-primary);
  border-radius: 0.2rem;
  padding: 0.3rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.disabled {
  pointer-events: none;
}
`