import React from 'react'

import { useClickOut } from '../../hooks'
import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'


import { DrawerContainer } from './styled'

type Drawer = {
  visible: boolean | null;
  onClickOut?: (state?:boolean) => any;
  children: ReactNode;
  background?: string;
  placement?: 'left' | 'right';
}

export const Drawer = ({
  visible, 
  onClickOut, 
  children,
  placement = 'left'
}:Drawer) => {
  //@warn useClickOut
  const {isVisible, ref, setIsVisible} = useClickOut(false)
  const [menuState, setMenuState ] = useState<boolean | null >(visible)
  const [menuLoaded, setMenuLoaded] = useState<boolean | null >(false)
  const [menuAnimation, setAnimation] = useState<boolean | null >(false)

  const showMenu = (state:boolean | null, time: number) => {
    state 
    ? setTimeout(() => {setMenuLoaded(state)
      setTimeout(() => {setAnimation(state)}, time)
    }, time/2)
    : setTimeout(() => {setAnimation(state)
      setTimeout(() => {setMenuLoaded(state)}, time)
    }, time/2)
  }

  useEffect(() => {
    !isVisible && onClickOut && onClickOut(isVisible)
    setMenuState(false)
  }, [isVisible])

  useEffect(() => {
    setIsVisible(true)
    showMenu(menuState, 40)
  }, [menuState])

  return(<>
   {menuLoaded && ReactDOM.createPortal( 
     <DrawerContainer 
      ref={ref} 
      className={`modtwo ${placement} ${menuAnimation ? 'show' : ''}`}
     >
       {children}
     </DrawerContainer>
   , document.body)}
  </>)
}
