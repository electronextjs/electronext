import React, { Dispatch, ReactNode, SetStateAction, MouseEvent } from "react";

export type ElectroNextContextType = {
  title: string | null;
  favicon: string | null;
  titleBarColor: string | null;
  setTitle: Dispatch<SetStateAction<string | null>>
  setFavicon: Dispatch<SetStateAction<string | null>>
  setTitleBarColor: Dispatch<SetStateAction<string | null>>
  menuState: boolean | null;
  setMenuState: Dispatch<SetStateAction<boolean | null>>
  loading: boolean;
  config: enConfigAppType;
  Electron: any,
}

export type UseElectroNextApp = {
  title: string;
  favicon: string;
  titleBarColor: string;
  menuState: boolean;
  loading: boolean;
  Electron?: any;
}

export type UseElectroNextAppOptions = {
  title?: string | null;
  favicon?: string | null;
  titleBarColor?: string | null;
  menuState?: boolean;
}

export interface enConfigAppType {
  titleBar: {
    visible: boolean,
    favIcon: boolean,
    menuIcon: boolean,
    controlsType: 'windows' | 'macos', 
    titlePosition: 'start' | 'center' | 'end',
  }
}
export type ElectroNextProviderProps = {
  children: ReactNode
  CustomMenuDrawer?: React.ReactElement | JSX.Element,
  CustomTitleBar?: React.ReactElement | JSX.Element,
  title?: string | null;
  favicon?: string | null;
  titleBarColor?: string | null;
  config?: enConfigAppType,
  Electron: any,
}


export interface ButtonDefault {
  label: string;
  icon?: string | JSX.Element;
  active?: boolean;
  onClick?: (e?:MouseEvent<HTMLDivElement>) => any;
  extUrl?: string;
  link?: string;
  fontSize?: number;
  ref?: React.MutableRefObject<any>;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}

export interface DrawerDefault {
  visible: boolean;
  onClose?: (res:{clickOut?:boolean}) => any;
  clickOut?: boolean;
  children: ReactNode | JSX.Element;
  placement?: 'left' | 'right';
  btnRef?: React.MutableRefObject<HTMLDivElement | HTMLButtonElement> | React.MutableRefObject<any> ;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}