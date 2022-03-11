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
  DomRendered: boolean;
  config: ElectroNextAppConfig;
}

export type ElectroNextContextTypeClient = {
  title: string;
  favicon: string;
  titleBarColor: string;
  menuState: boolean;
  DomRendered: boolean;
}

export type ElectroNextAppConfig = {
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
  title: string | null;
  favicon: string | null;
  titleBarColor: string | null;
  config: ElectroNextAppConfig
}

export type useElectroNextAppProps = {
  title?: string | null;
  favicon?: string | null;
  titleBarColor?: string | null;
  menuState?: boolean;
}

export interface ButtonDefault {
  label: string;
  icon?: string | JSX.Element;
  active?: boolean;
  onClick?: (e?:MouseEvent<HTMLButtonElement>) => any;
  href?: string;
  fontSize?: number;
}