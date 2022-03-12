import React from 'react'
import { useEffect, useState } from "react"

import { MenuDrawer } from '../components/Drawer/MenuDrawer'
import { ElectroNextStyle } from '../styles/electronext'
import { ElectroNextProviderProps } from '../types'
import TitleBar from '../components/TitleBar'
import ElectroNextContext from '../context'
import { DefaultConfig } from '../config'


const ElectroNextApp = (props:ElectroNextProviderProps) => {
  const [title, setTitle] = useState<string | null>(props.title ?? null) 
  const [favicon, setFavicon] = useState<string | null>(props.favicon ?? null) 
  const [titleBarColor, setTitleBarColor] = useState<string | null>(props.titleBarColor ?? 'transparent') 

  const [menuState, setMenuState] = useState<boolean | null>(false)
  const [DomRendered, setDomRendered] = useState(false)

  const Electron = props.Electron
  const config = props.config ?? DefaultConfig

  //@setDomRendered
  useEffect(() => setDomRendered(true), [])
  return (
    <ElectroNextContext.Provider value={{
      DomRendered,
      title, setTitle, 
      favicon, setFavicon, 
      titleBarColor, setTitleBarColor,
      menuState, setMenuState,
      config, 
      Electron
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