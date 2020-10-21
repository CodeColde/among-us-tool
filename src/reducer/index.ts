import { IInitialState } from "../entities";
import manageColors from "../utils/colorManagment";
import { LobbyActionTypes, MANAGE_COLORS, RESET, SET_GAME_OVER, SET_GAME_START, SET_PLAYER_TYPE } from "./actions";

export const initialState: IInitialState = {
  gameStart: false,
  playerType: "",
  colors: []
}

export const lobbyReducer = (state: IInitialState = initialState, action: LobbyActionTypes) => {
  switch (action.type) {
    case SET_PLAYER_TYPE:
      return {
        ...state,
        playerType: action.payload.type === state.playerType ? "" : action.payload.type,
      };
    case SET_GAME_START:
      return {
        ...state,
        gameStart: true,
      }
    case SET_GAME_OVER:
      return {
        ...initialState,
        colors: state.colors.map(c => ({ ...c, list: "" })),
      }
    case MANAGE_COLORS:
      return {
        ...state,
        colors: manageColors(state.colors, action.payload.color, action.payload.list)
      }
    case RESET:
      return initialState;
    default:
      return state;
  }
}