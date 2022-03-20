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

  const onClick = (e:MouseEvent<HTMLDivElement>) => {
    !props.extUrl && props.onClick && props.onClick(e)
    buttonType == 'select' && setActive(!active)
    props.extUrl && window.open(props.extUrl)
  }

  return(<>
    <ButtonListContainer
      onClick={e => onClick(e)}
      className={`${buttonType} ${active ? 'active' : ''} ${props.className}`}
      id={props.id}
      style={{
        ...props.style,
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

