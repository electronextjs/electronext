
//@imports
import { useContext, useEffect } from "react"

import ElectroNext from './provider'
import ElectroNextContext from './context'

//@hooks
import {
  useElectroNext, 
  useClickOut
} from './hooks'

//@ElectroNext Home Page
import { ElectroNextHome } from './home'


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
  //@hooks
  useElectroNext, 
  useClickOut,

  //@Functions
  Title,
  Favicon,
  TitleBarColor,

  //@ElectroNext Home Page
  ElectroNextHome,

}
export default ElectroNext

