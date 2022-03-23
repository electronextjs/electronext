//@imports
import { useContext, useEffect } from "react"

import ElectroNextApp from './provider'
import ElectroNextContext from './context'

//@hooks
import {
  useElectroNextApp, 
  useClickOut
} from './hooks'

//@ElectroNext Home Page
import { ElectroNextHome } from './home'

//@Components
import {
  Button,ButtonList,
  Drawer,DrawerFooter,
  DrawerHeader, DrawerMain,
  Hr, Loading

} from './components'


//@Exports
export {
  //@hooks
  useElectroNextApp,
  useClickOut,

  //@ElectroNext Home Page
  ElectroNextHome,

  //@compoenents
  Button, ButtonList,
  Drawer, DrawerFooter,
  DrawerHeader, DrawerMain,
  Hr, Loading
}
export type { enConfigAppType, enConfigElectronType } from './types'
export default ElectroNextApp

//others components

export const Title = (props: {children: string}) => {
  const { setTitle } = useContext(ElectroNextContext)
  useEffect(() => {
    setTitle(props.children)
  },[props.children])
  return null
}
export const Favicon = ({src}:{src: string})  => {
  const { setFavicon } = useContext(ElectroNextContext)
  useEffect(() => {
    setFavicon(src)
  },[src])
  return null
}
export const TitleBarColor = ({color}:{color: string})  => {
  const { setTitleBarColor } = useContext(ElectroNextContext)
  useEffect(() => {
    setTitleBarColor(color)
  },[color])
  return null
}
