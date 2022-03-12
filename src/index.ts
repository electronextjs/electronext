
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


//others components
const Title = ({children}:{children: string}) => {
  const { setTitle } = useContext(ElectroNextContext)
  useEffect(() => {
    setTitle(children)
  },[children])
  return null
}
const Favicon = ({src}:{src: string})  => {
  const { setFavicon } = useContext(ElectroNextContext)
  useEffect(() => {
    setFavicon(src)
  },[src])
  return null
}
const TitleBarColor = ({color}:{color: string})  => {
  const { setTitleBarColor } = useContext(ElectroNextContext)
  useEffect(() => {
    setTitleBarColor(color)
  },[color])
  return null
}


//@Exports
export {
  //@Electron

  //@hooks
  useElectroNextApp, 
  useClickOut,

  //@Functions
  Title,
  Favicon,
  TitleBarColor,

  //@ElectroNext Home Page
  ElectroNextHome,

  //@compoenents
  Button,ButtonList,
  Drawer,DrawerFooter,
  DrawerHeader, DrawerMain,
  Hr, Loading
}
export default ElectroNextApp

