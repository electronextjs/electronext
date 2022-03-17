import React from 'react'

import { ButtonContainer } from './styled'
import { MouseEvent } from 'react'
import { Loading } from '../Loading'
import { ButtonDefault } from '../../types'

interface Button extends ButtonDefault {
  type?: 'default' | 'primary' | 'dark' | 'succ' | 'info' | 'warn' | 'dang' | 'gray';
  loading?:boolean;
}
export const Button = (props:Button) => {
  const buttonType = props.type ?? 'default'

  const onClick = (e:MouseEvent<HTMLDivElement>) => {
    !props.href && props.onClick && props.onClick(e)
    props.href && window.open(props.href)
  }

  return(<>
    <ButtonContainer
      onClick={e => onClick(e)}
      className={`${buttonType} `}
      style={{
        fontSize: props.fontSize
      }}
    >
      {props.loading
      ? <Loading/>
      : <>
        {props.icon &&
          <i data-icon>{props.icon}</i>
        }
        <span>{props.label}</span>
      </>
      }
      
    </ButtonContainer>
  </>)
}
