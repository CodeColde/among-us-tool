import { IDispatch, IPlayerType } from "../entities";

export const RESET = "RESET";
export const SET_PLAYER_TYPE = "SET_PLAYER_TYPE";
export const SET_GAME_START = "SET_GAME_START";
export const SET_GAME_OVER = "SET_GAME_OVER";
export const MANAGE_COLORS = "MANAGE_COLORS";

export interface IResetActionReturn {
  type: typeof RESET;
}

export interface IPlayerTypeActionReturn {
  type: typeof SET_PLAYER_TYPE;
  payload: { type: "Crewmate" | "Impostor" | "" }
}

export interface ISetGameStartActionReturn {
  type: typeof SET_GAME_START;
}

export interface ISetGameOverActionReturn {
  type: typeof SET_GAME_OVER;
}

export interface IManageColorsActionReturn {
  type: typeof MANAGE_COLORS;
  payload: {
    color: string;
    list?: string;
  }
}

export type ISetPlayerTypeAction = (type: IPlayerType, dispatch: IDispatch) => void;

export type LobbyActionTypes =
  | IResetActionReturn
  | IPlayerTypeActionReturn
  | ISetGameStartActionReturn
  | ISetGameOverActionReturn
  | IManageColorsActionReturn;