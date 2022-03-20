import React, { useEffect, useState } from "react"

import { MenuDrawer } from '../components/Drawer/MenuDrawer'
import { ElectroNextStyle } from '../styles/electronext'
import { ElectroNextProviderProps } from '../types'
import TitleBar from '../components/TitleBar'
import ElectroNextContext from '../context'
import { DefaultConfig } from '../config'


const ElectroNextApp = (props:ElectroNextProviderProps) => {
  const [title, setTitle] = useState<string | null>(props.title ?? '') 
  const [favicon, setFavicon] = useState<string | null>(props.favicon ?? '') 
  const [titleBarColor, setTitleBarColor] = useState<string | null>(props.titleBarColor ?? 'transparent') 

  const [menuState, setMenuState] = useState<boolean | null>(false)
  const [loading, setLoading] = useState(true)


  const Electron = props.Electron
  const config = props.config ?? DefaultConfig

  //@setLoading
  useEffect(() => setLoading(false), [])
  return (
    <ElectroNextContext.Provider value={{
      loading,
      title, setTitle, 
      favicon, setFavicon, 
      titleBarColor, setTitleBarColor,
      menuState, setMenuState,
      config, 
      Electron
    }
    }>
      <ElectroNextStyle/>
      <div id="__TitleBar">
        {!props.CustomTitleBar ? <TitleBar /> : props.CustomTitleBar}
      </div>
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