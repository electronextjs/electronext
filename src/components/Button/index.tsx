import React from 'react'

import { ButtonContainer } from './styled'
import { MouseEvent } from 'react'
import { Loading } from '../Loading'
import { ButtonDefault } from '../../types'

interface Button extends ButtonDefault {
  type?: 'default' | 'primary' | 'dark' | 'succ' | 'info' | 'warn' | 'dang' | 'gray';
  loading?:boolean;
}
export const Button = React.forwardRef((props:Button, ref:React.Ref<HTMLDivElement>) => {
  const buttonType = props.type ?? 'default'

  const onClick = (e:MouseEvent<HTMLDivElement>) => {
    !props.extUrl && props.onClick && props.onClick(e)
    props.extUrl && window.open(props.extUrl)
  }

  return(<>
    <ButtonContainer
      ref={ref}
      onClick={e => onClick(e)}
      className={`${buttonType} ${props.className}`}
      id={props.id}
      style={{
        ...props.style,
        fontSize: props.fontSize
      }}
    >
      {props.loading
      ? <Loading size={20} strokeWidth={4}/>
      : <>
        {props.icon &&
          <i data-icon>{props.icon}</i>
        }
        <span>{props.label}</span>
      </>
      }
      
    </ButtonContainer>
  </>)
})
