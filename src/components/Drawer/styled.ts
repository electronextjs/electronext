import styled from "styled-components";

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  min-width: 12rem;
  height: 100vh;
  padding: 2rem 0.5rem;
  background: #231f1f4f;
  z-index: 0;
  box-sizing: border-box;
  //box-shadow: 0px 0px 0px 1px #6969693d;
  transition: ease 0.2s;
  display: flex;
  flex-direction: column;

  &.left{
    left: 0;
    transform: translateX(-100%);
    &.modtwo {
      border-radius: 0px 0.5rem 0.5rem 0px;
    }
  }

  &.right{
    right: 0;
    transform: translateX(100%);
    &.modtwo {
      border-radius:  0.5rem 0px 0px 0.5rem ;
    }
  }

  &.show {
    transform: translateX(0);
  }

  &.modtwo {
    border-radius: 0px 0.5rem 0.5rem 0px;
    height: calc(100vh - 2rem);
    top: inherit;
    bottom: 0;
    padding: 0.5rem 0;
  }
  @keyframes openMenuDrawer {
    0% {transform: translateX(-100%)}
    100% {transform: translateX(0px)}
  }
  @keyframes closeMenuDrawer {
    0% {transform: translateX(0)}
    100% {transform: translateX(-100%)}
  }
`
export const Relative = styled.div`
  position: relative;
  height: 100%;

  & .btnclose {
    position: absolute;
    left: -1rem;
    top: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #231f1f4f;
    user-select: none;
    cursor: pointer;
  }
`

const hmf = `
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 0.2rem;
`
export const DrawerHeader = styled.div`
  ${hmf}
`
export const DrawerMain = styled.div`
  ${hmf}
  height: 100%;
`
export const DrawerFooter = styled.div`
  ${hmf}
`




export const Hr = styled.hr`
  border: 0;
  margin: 0.4rem 0;
  width: 100%;
  height: 1px;
  background-color: #63636347;
`

