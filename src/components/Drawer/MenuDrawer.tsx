import React, { ReactNode, useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useClickOut, useElectroNextApp } from '../../hooks'

import {ButtonList} from '../ButtonList'
import { DrawerContainer, DrawerFooter, DrawerMain, Hr } from './styled'

import { IconDoc, IconIssue, IconRepo, IconReport } from '../../icons'
import ElectroNextContext from '../../context'


//@export component
export const MenuDrawer = ({CustomMenuDrawer, onClickOut}:{
  CustomMenuDrawer?: ReactNode;
  onClickOut?: (state?:boolean) => any;
}) => {
  //@warn useClickOut
  const {isVisible, ref, setIsVisible} = useClickOut(false)
  //@warn useElectroNext
  const { setMenuState } = useContext(ElectroNextContext)
  const { menuState } = useElectroNextApp()

  const [menuLoaded, setMenuLoaded] = useState(false)
  const [menuAnimation, setAnimation] = useState(false)

  const showMenu = (state:boolean, time: number) => {
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
      className={`modtwo left ${menuAnimation ? 'show' : ''}`}
      style={{width: '15rem'}}
     >
       {CustomMenuDrawer 
       ? CustomMenuDrawer
       : <MenuElectroNext/>}
     </DrawerContainer>
   , document.body)}
  </>)
}

const MenuElectroNext = () => {

  return(<>
    <DrawerMain>
      <ButtonList icon={<IconDoc/>} label='Documentation'/>
      <ButtonList icon={<IconRepo/>} label='Repository' href='https://github.com/andremalveira/ElectroNext.js'/>
      <Hr/>
      <ButtonList icon={<IconReport/>} label='Report Issue' href='https://github.com/andremalveira/ElectroNext.js/issues/new'/>
      <ButtonList icon={<IconIssue/>} label='Issues' href='https://github.com/andremalveira/ElectroNext.js/issues'/>

    </DrawerMain>
    
    <DrawerFooter>
    <Hr/>
      <div style={{
        textAlign: 'center', 
        fontSize: '0.8rem'
      }}><a href='#'>EletroNext.js</a></div>
    </DrawerFooter>
  </>)
}