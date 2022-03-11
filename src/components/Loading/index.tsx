import React from 'react';

import * as styled from './styled';

type LoadingProps = {
  color?: string;
  size?: number;
  strokeWidth?: 2 | 4 | 6 | 8 | 10;
}
export const Loading = (props:LoadingProps) => {
  return (
    <styled.SpinnerContainer >
      <styled.Svg 
        color={props.color ?? '#fff'} 
        width={props.size ?? 20} 
        height={props.size ?? 20} 
        className="spinner" 
        viewBox="0 0 50 50"
      >
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={props.strokeWidth ?? 4}></circle>
      </styled.Svg>
    </styled.SpinnerContainer>
  )
}
