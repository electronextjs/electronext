import { useContext, useEffect } from "react"

import ElectroNextContext from "../context"
import { UseElectroNextApp, UseElectroNextAppOptions } from '../types'

const useElectroNextApp = (options?:UseElectroNextAppOptions) => {
  const { setTitle, setFavicon, setTitleBarColor, setMenuState } = useContext(ElectroNextContext)
  useEffect(() => {
    if(options?.title){setTitle(options.title)}
    if(options?.favicon){setFavicon(options.favicon)}
    if(options?.titleBarColor){setTitleBarColor(options.titleBarColor)}
    if(options?.menuState){setMenuState(options.menuState)}
  },[])
  return  useContext(ElectroNextContext) as UseElectroNextApp
}

export default useElectroNextApp