import React from 'react';
import { IInitialState, IPlayerType } from '../entities';

export interface IActionsContext {
  state: null | IInitialState;
  startGameAction: null | (() => void);
  endGameAction: null | (() => void);
  resetAction: null | (() => void);
  playerTypeAction: null | ((type: IPlayerType) => void);
  manageColorsAction: null | ((color: string, list?: string) => void);
}

const ActionsContext = React.createContext<IActionsContext>({
  state: null,
  startGameAction: null,
  endGameAction: null,
  resetAction: null,
  playerTypeAction: null,
  manageColorsAction: null,
})

export default ActionsContext;