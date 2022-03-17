import { useContext, useEffect } from "react"
import ElectroNextContext from '../../context'

export const Title = ({children}:{children: string}) => {
  const { setTitle } = useContext(ElectroNextContext)
  useEffect(() => {
    setTitle(children)
  },[children])
  return null
}