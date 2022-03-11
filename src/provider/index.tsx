import React from 'react'
import { useEffect, useState } from "react"

import { MenuDrawer } from '../components/Drawer/MenuDrawer'
import { ElectroNextStyle } from '../styles/electronext'
import { ElectroNextProviderProps } from '../types'
import TitleBar from '../components/TitleBar'
import ElectroNextContext from '../context'
import { DefaultConfig } from '../config'


const ElectroNextApp = ({config = DefaultConfig}, props:ElectroNextProviderProps) => {
  const [title, setTitle] = useState<string | null>(props.title) 
  const [favicon, setFavicon] = useState<string | null>(props.favicon) 
  const [titleBarColor, setTitleBarColor] = useState<string | null>(props.titleBarColor ?? 'transparent') 

  const [menuState, setMenuState] = useState<boolean | null>(false)
  const [DomRendered, setDomRendered] = useState(false)

  //const config = props.config ?? DefaultConfig


  //@setDomRendered
  useEffect(() => setDomRendered(true), [])
  return (
    <ElectroNextContext.Provider value={{
      DomRendered,
      title, setTitle, 
      favicon, setFavicon, 
      titleBarColor, setTitleBarColor,
      menuState, setMenuState,
      config
    }
    }>
      <ElectroNextStyle/>
      <TitleBar />
      <div id='__App'>
        { props.children }
      </div>
      <MenuDrawer 
        CustomMenuDrawer={props.CustomMenuDrawer}
      />
    </ElectroNextContext.Provider>
  )
}

export default ElectroNextApp