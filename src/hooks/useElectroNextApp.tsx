import { useContext, useEffect } from "react"

import ElectroNextContext from "../context"
import { ElectroNextContextTypeClient, useElectroNextAppProps } from '../types'

const useElectroNextApp = (props?:useElectroNextAppProps) => {
  const { setTitle, setFavicon, setTitleBarColor } = useContext(ElectroNextContext)
  useEffect(() => {
    if(props?.title){setTitle(props.title)}
    if(props?.favicon){setFavicon(props.favicon)}
    if(props?.titleBarColor){setTitleBarColor(props.titleBarColor)}
  },[])
  return  useContext(ElectroNextContext) as ElectroNextContextTypeClient
}

export default useElectroNextApp