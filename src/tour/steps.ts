import React from 'react';
import amongUsColors from "../theme/amongUsColors";
import { MANAGE_COLORS, RESET, SET_GAME_START, SET_PLAYER_TYPE } from '../reducer/actions';
import { LobbyActionTypes } from "../reducer/actions";
import { IInitialState } from "../entities";

const steps = (state: IInitialState, dispatch: React.Dispatch<LobbyActionTypes>) => [
  {
    selector: '[data-tut="reactour__title"]',
    content: `Welcome to the Among Us Sus Tool, a tool built to help track who to kill and who to keep alive!\n\nThis tour will give you an overview of where everything is and what it does!`,
  },
  {
    selector: '[data-tut="reactour__player-selector"]',
    content: 'Drag at least 4 and at most 10 players into the game lobby.',
  },
  {
    selector: '[data-tut="reactour__select-player-type"]',
    content: 'Select the type of player you are in your game.',
    action: () => {
      const execute = (color: string) => dispatch({ type: MANAGE_COLORS, payload: { color } });
      if (state.colors.length < 10) {
        Object.keys(amongUsColors).map(color => execute(color))
      }
    }
  },
  {
    selector: '[data-tut="reactour__start-game"]',
    content: 'When you are ready, start your game.',
    action: () => {
      if (!state.playerType) {
        dispatch({ type: SET_PLAYER_TYPE, payload: { type: "Crewmate" } })
      }
    }
  },
  {
    selector: '[data-tut="reactour__crewmate-start"]',
    content: 'As a crewmate, your goal is to clear your teammates or sus out suspicious behavior.',
    action: () => {
      if (!state.gameStart) {
        dispatch({ type: SET_GAME_START })
      }
    }
  },
  {
    selector: '[data-tut="reactour__crewmate-boxes"]',
    content: "Drag any color to any boxes you deem relevant. Mark players as grouped, suspicious, clear, or dead, or if you're uncertain, leave them out!",
  },
  {
    selector: '[data-tut="reactour__crewmate-end-game"]',
    content: "Have you won son? End the game to return to the home screen with your lobby in tact.",
  },
  {
    selector: '[data-tut="reactour__impostor-start"]',
    content: "As an impostor, track who you believe you can or cannot kill to remain undetected and have a back up plan",
    action: () => {
      if (state.playerType === "Crewmate") {
        dispatch({ type: SET_PLAYER_TYPE, payload: { type: "Impostor" } })
      }
    }
  },
  {
    selector: '[data-tut="reactour__impostor-length"]',
    content: "Up to 3 impostors can be active in a game!",
  },
  {
    selector: '[data-tut="reactour__feedback"]',
    content: "Have any feedback, or feel the tool is missing some logic? Feel free to send me feedback any time!",
    action: () => {
      if (state.gameStart) {
        dispatch({ type: RESET })
      }
    }
  },
];

export default steps;