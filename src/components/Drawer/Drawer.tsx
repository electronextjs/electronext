import React from 'react'

import { useClickOut } from '../../hooks'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'


import { DrawerContainer, Relative } from './styled'
import { DrawerDefault } from '../../types'

export const Drawer = ({
  visible, 
  onClose,
  clickOut,
  children,
  placement = 'left',
  style,
  className,
  id,
  btnRef 
}:DrawerDefault) => {
  //@warn useClickOut
  const {isVisible, ref, setIsVisible} = useClickOut(false)
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
    }
  }, [isVisible])

  useEffect(() => {
    clickOut && setIsVisible(visible)
    if(clickOut && btnRef) {
      if( visible ) {
        btnRef?.current.classList.add('disabled')
      } else {
        btnRef?.current.classList.remove('disabled')
      }
    }
    showMenu(visible, 40)
  }, [visible])

  useEffect(() => {
  
  },[])
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
