import React, { useContext } from 'react'

import ElectroNextContext from '../context'
import { Title, Favicon, Button } from '../'
import { ElectroNextHomeContainer } from './styled'

export const ElectroNextHome = () => {
  const { setMenuState, menuState } = useContext(ElectroNextContext)

return (<>
    <Title>ElectroNext.js App Template </Title>
    <Favicon src='/electronext.logo.svg'/>
    
    <ElectroNextHomeContainer >
      <div className='logo' style={{
        width: '350px',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img src='/electronext.logo.animated.svg' />
      </div>
    
      <div className='footer' >
        <Button label='⭐ Getting Started ⭐' onClick={() => setMenuState(!menuState)}/>
        {/* <Modal></Modal> */}
      </div>
    </ElectroNextHomeContainer>
    
  </>)
}

