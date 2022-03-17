import styled from "styled-components";

type ButtonListContainer = {
  type?: 'click' | 'select';
}

export const ButtonListContainer = styled.div<ButtonListContainer>`
  position: relative;
  border: 0;
  background-color: transparent;
  text-align: left;
  padding: 0.5rem 1rem;
  width: auto;
  transition: ease 0.05s;
  color: currentColor;
  cursor: pointer;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  overflow: hidden; 
  gap: 0.8rem;
  font-size: 0.9rem;
  line-height: normal;

  &.active, &.click:active:active {
    background-color: var(--electronext-button-active);
  }

  &:hover {
    background-color: var(--electronext-button-hover);

    ::before {
      height: 0.95rem;
      opacity: 1;
    }
  }
  &.active, &.click:active {
    ::before {
      height: 100%;
      opacity: 1;
    }
  }
  &.click:active::before  {
    transition: ease 0.05s;
  }
  ::before {
    content: '';
    position: absolute;
    left: 0;
    height: 0rem;
    opacity: 0;
    width: 0.21rem;
    background-color: var(--electronext-icon);
    border-radius: 25rem;
    transition: ease 0.3s;
  }

  & i[data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    
    & svg {
      width: 16px;
      height: 16px;
    }
  }

`
