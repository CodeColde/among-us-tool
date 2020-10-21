import { LobbyActionTypes } from "../reducer/actions";

export const ItemTypes = {
  COLOR: 'color',
}

export type IPlayerType = "Crewmate" | "Impostor" | "";

export interface IColors {
  color: string;
  list: string;
}

export interface IInitialState {
  gameStart: boolean;
  playerType: IPlayerType;
  colors: Array<IColors>;
}

export interface IAction {
  type: string;
  payload?: any
}

export type IDispatch = (action: LobbyActionTypes) => void;

export type IReducer = (action: LobbyActionTypes, state: IInitialState) => IInitialState;