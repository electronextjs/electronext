import React from 'react'

import { ButtonListContainer } from './styled'
import { MouseEvent, useState } from 'react'
import { ButtonDefault } from '../../types'

interface ButtonList extends ButtonDefault {
  type?: 'click' | 'select';
}

export const ButtonList = (props:ButtonList ) => {
  const [active, setActive] = useState(props.active ?? false)
  const buttonType = props.type ?? 'click'

  const onClick = (e:MouseEvent<HTMLButtonElement>) => {
    !props.href && props.onClick && props.onClick(e)
    buttonType == 'select' && setActive(!active)
    props.href && window.open(props.href)
  }

  return(<>
    <ButtonListContainer
      onClick={e => onClick(e)}
      className={`${buttonType} ${active ? 'active' : ''}`}
      style={{
        fontSize: props.fontSize
      }}
    >
      {props.icon &&
        <i data-icon>{props.icon}</i>
      }
      {props.label}
    </ButtonListContainer>
  </>)
}

