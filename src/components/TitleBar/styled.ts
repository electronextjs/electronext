import styled from "styled-components";

export const TitleBarContainer = styled.div`
  min-height: 2rem;
  max-height: 2rem;
  height: 2rem;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  color: #fff;
  user-select: none;
  -webkit-app-region: drag;
  -webkit-user-select: none;
  position: relative;
  z-index: 99;
  padding: 0 0.5rem;

  &.start, &.end {
    display: flex;
  }
  & .menudrawer {
    cursor: pointer;

    transition: ease 0.2s;
    border-radius: 0 0 0.5rem 0;
    -webkit-app-region: no-drag;

    margin-left: -0.5rem;
    align-items: center;
    display: flex;
    height: 100%;
    box-sizing: border-box;

    & svg {
      align-items: center;
      display: flex;
      box-sizing: border-box;

      height: 2rem;
      width: 2rem;
      padding: 6px;
      margin-left: 2px;
    }

  }
  & .menudrawer.active {
    //background-color: #9c9c9c1a;
  }
  & .menudrawer:hover {
    background-color: #9c9c9c3f;
  }

  & .menudrawer:active svg {
    transition: ease 0.2s;
    transform: scale(0.85);
  }

  & .favicon {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    padding: 0 0.3rem;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & .windows-controls {
    font-family: "Segoe MDL2 Assets", sans-serif;
    text-rendering: geometricPrecision;
    -webkit-app-region: no-drag;
    margin-right: -0.5rem;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;


    & .native {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 29px;
      width: 45px;
      transition: background 165ms;
      cursor: default;
      font-size: 9.5px;
    }

    & .native:hover {
      background: rgba(0, 0, 0, .1);
    }

    & .native:active {
      background: rgba(0, 0, 0, .2);
    }

    & .close:hover {
      background: rgb(232, 17, 35, 1);
    }
    & .close:active {
      background: rgb(241, 112, 122);
    }

    & .close:hover,
    & .close:active {
      color: white;
    }

  }

  & .macos-controls {
    display: flex;
    -webkit-app-region: no-drag;
    width: 5rem;
    justify-content: flex-end;

    & .dot {
      width: 0.85rem;
      height: 0.85rem;
      border-radius: 50%;
      margin: 0 0.2rem;
      cursor: pointer;
      
      &.y {
      background: #FFBD2E!important;
      }
      &.g  {
        background: #27C93F!important;
      }
      &.r {
        background: #FF5F56!important;
      }
    }
  }


`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0;
  width: 100%;
  z-index: -1;

  &.center{
    position: absolute;
    justify-content: center;
  }
  &.start, &.end {
    display: grid;
  }
  &.macos .title .center{
    padding: 0 5rem;
  }

  &.center .title {
    justify-content: center;
  }

  &.end .title {
    margin-left: auto;
  }

  & .title {
    font-size: 0.9rem;
    color: #cfcfcf;
    display: flex;
    align-items: center;
    margin-bottom: 2px;

    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;

  }
`