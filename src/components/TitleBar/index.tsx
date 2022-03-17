import React from 'react';
import { useContext, useEffect, useState } from 'react'

import { TitleBarContainer, TitleContainer } from './styled'
import { IconList, IconArrowLeft } from '../../icons'
import { useElectroNextApp } from '../../hooks';
import ElectroNextContext from '../../context';
import { HeadData } from '../HeadData'


//@GLOBAL VARIABLE
//const ipcRenderer = Electron.ipcRenderer; 


//@Window controls
const WindowsControls = () => {
  const [isMaximized, setIsMaximized] = useState(false)
  const { Electron } = useContext(ElectroNextContext)

  return(<>
    <div className={'windows-controls'}>
      <div className="native minimize" onClick={() => Electron.ipcRenderer.send('MinimizeApp')}>&#xE921;</div>
      <div className="native maximize" 
      onClick={() => {Electron.ipcRenderer.send('MaximizeApp'); setIsMaximized(!isMaximized)}}>
        {isMaximized ? <>&#xE923;</> : <>&#xE922;</>}
      </div>
      <div className="native close" onClick={() => Electron.ipcRenderer.send('CloseApp')}>&#xE8BB;</div>

    </div>
  </>)
}
const MacosControls = () => {
  const { Electron } = useContext(ElectroNextContext)

  return(<>
    <div className={'macos-controls'}>
      <div className='dot y' onClick={() => Electron.ipcRenderer.send('MinimizeApp')}></div>
      <div className='dot g' onClick={() => Electron.ipcRenderer.send('MaximizeApp')}></div>
      <div className='dot r' onClick={() => Electron.ipcRenderer.send('CloseApp')}></div>
    </div>
  </>)
}


//@TitleBar Component

const TitleBar = () => {
  const [windowTitle, setWindowTitle] = useState<null | string>(null)
  const [windowFavicon, setWindowFavicon] = useState<null | string>(null)

  //@warn useElectroNext
  const { setMenuState, config } = useContext(ElectroNextContext)
  const { title, favicon, titleBarColor, menuState  } = useElectroNextApp({
    title: windowTitle,
    favicon: windowFavicon
  })

  const onClickMenu = () => {
    setMenuState(!menuState)

  }

  useEffect(() => {
    if(document) {
      setWindowTitle(document.title)
      if(HeadData.favicon()) {
        setWindowFavicon(HeadData.favicon()!.href)
      }
    }
  },[])

  const isFavicon = windowFavicon ?? favicon

  return(<>
   {config.titleBar.visible && 
    <TitleBarContainer 
      className={`${config.titleBar.titlePosition} `} 
      style={{
        backgroundColor: titleBarColor
      }}
    >
      {config.titleBar.menuIcon
      ? <div className={`menudrawer ${menuState ? 'active' : ''}`} onClick={onClickMenu}>
        {menuState
        ? <IconArrowLeft size={20}/>
        : <IconList size={20}/>} 

      </div>
      : <span></span>}

      {isFavicon && config.titleBar.favIcon
        ? <div className="favicon">
          <img src={favicon}/>
        </div> : <span></span>
      }
      <TitleContainer className={`${config.titleBar.titlePosition} ${config.titleBar.controlsType}`}>
        <div className={`title`}>{title}</div>
      </TitleContainer>
      {config.titleBar.controlsType == 'windows' 
      ? <WindowsControls/> 
      : config.titleBar.controlsType == 'macos' ? <MacosControls/> : <WindowsControls/> }
    </TitleBarContainer>}
  </>)
}

export default TitleBar