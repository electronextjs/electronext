import React from 'react';

import * as styled from './styled';

type LoadingProps = {
  color?: string;
  size?: number;
  strokeWidth?: 0.5 | 1 | 2 | 4 | 6 | 8 | 10;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  absolute?: boolean;
}
export const Loading = (props:LoadingProps) => {
  return (
    <styled.SpinnerContainer 
      id={props.id}
      className={props.className}
      style={{
        ...props.style,
        position: props.absolute ? 'absolute' : undefined
      }}
    >
      <styled.Svg 
        color={props.color ?? '#fff'} 
        width={props.size ?? 35} 
        height={props.size ?? 35} 
        className="spinner" 
        viewBox="0 0 50 50"
      >
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={props.strokeWidth ?? 2}></circle>
      </styled.Svg>
    </styled.SpinnerContainer>
  )
}
