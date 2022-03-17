import React from 'react'

import { useClickOut } from '../../hooks'
import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'


import { DrawerContainer, Relative } from './styled'

type Drawer = {
  visible: boolean;
  onClose?: (res:{clickOut?:boolean}) => any;
  clickOut?: boolean;
  children: ReactNode;
  placement?: 'left' | 'right';
  
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}

export const Drawer = ({
  visible, 
  onClose,
  clickOut,
  children,
  placement = 'left',
  style,
  className,
  id,
}:Drawer) => {
  //@warn useClickOut
  const {isVisible, ref, setIsVisible} = useClickOut(false)
  //const [menuState, setMenuState ] = useState<boolean | null >(visible)
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
    if(clickOut) {
      !isVisible && onClose && onClose({clickOut:!isVisible})
      //!isVisible && setMenuState(false)
      //!isVisible && setIsVisible(false)
    }
  }, [isVisible])

  useEffect(() => {
    clickOut && setIsVisible(visible)
    showMenu(visible, 40)
  }, [visible])


  return(<>
   {menuLoaded && ReactDOM.createPortal( 
     <DrawerContainer 
      id={id}
      style={style}
      ref={ref} 
      className={`modtwo ${placement} ${menuAnimation ? 'show' : ''} ${className}`}
     >
       <Relative>
        {children}
       </Relative>
     </DrawerContainer>
   , document.body)}
  </>)
}
