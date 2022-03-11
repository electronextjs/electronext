import { createContext } from "react"
import { DefaultConfig } from "../config"
import { ElectroNextContextType } from '../types'

const ElectroNextContext = createContext<ElectroNextContextType>({
  title: null,
  setTitle: () => null,
  favicon: null,
  setFavicon: () => null,
  titleBarColor: null,
  setTitleBarColor: () => null,
  menuState: null,
  setMenuState: () => null,
  DomRendered: false,
  config: DefaultConfig,
})

export default ElectroNextContext