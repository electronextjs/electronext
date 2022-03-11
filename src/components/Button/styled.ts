import styled from "styled-components";

export const ButtonContainer = styled.button`
  position: relative;
  border: 0;
  text-align: left;
  padding: 0.6rem 1.5rem;
  transition: ease 0.3s;
  background-color: transparent;
  color: currentColor;
  cursor: pointer;
  border-radius: 0.35rem;
  display: flex;
  align-items: center;
  overflow: hidden; 
  gap: 0.8rem;
  min-width: 7rem;
  min-height: 2.3rem;
  justify-content: center;
  z-index: 0;

  span {
    z-index: 1;
  }
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: ease 0.3s;
    z-index: -1;
  }
  :hover::before {
    background-color: var(--electronext-button-hover);
  }
  :active::before {
    background-color: var(--electronext-button-active);
  }
  & i[data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: 16px;
      height: 16px;
    }
  }
  &.default {
    background-color: var(--electronext-button-default);
  }
  &.primary {
    background-color: var(--electronext-button-primary);
  }
  &.dark {
    background-color: var(--electronext-button-dark);
  }
  &.succ {
    background-color: var(--electronext-button-succ);
    color: #fff;
  }
  &.info {
    background-color: var(--electronext-button-info);
  }
  &.warn {
    background-color: var(--electronext-button-warn);
    color: #fff;
  }
  &.dang {
    background-color: var(--electronext-button-dang);
  }
  &.gray {
    background-color: var(--electronext-button-gray);
  }
`