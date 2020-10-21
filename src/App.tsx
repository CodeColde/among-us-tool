import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Crewmate from './components/templates/Crewmate';
import Home from './components/templates/Home';
import Impostor from './components/templates/Impostor';
import { IPlayerType } from './entities';
import { initialState, lobbyReducer } from './reducer';
import { MANAGE_COLORS, RESET, SET_GAME_START, SET_PLAYER_TYPE, SET_GAME_OVER } from './reducer/actions';
import ActionsContext from './reducer/handlerContext';

function App() {
  const [state, dispatch] = React.useReducer(lobbyReducer, initialState);
  const { gameStart, playerType } = state;
  const page = gameStart
    ? playerType
    : "home";

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <ActionsContext.Provider
          value={{
            state,
            manageColorsAction: (color: string, list?: string) => dispatch({ type: MANAGE_COLORS, payload: { color, list } }),
            startGameAction: () => state.playerType && dispatch({ type: SET_GAME_START }),
            endGameAction: () => dispatch({ type: SET_GAME_OVER }),
            resetAction: () => dispatch({ type: RESET }),
            playerTypeAction: (type: IPlayerType) => dispatch({ type: SET_PLAYER_TYPE, payload: { type } })
          }}
        >
          {page === "home" && <Home />}
          {page === "Crewmate" && <Crewmate />}
          {page === "Impostor" && <Impostor />}
        </ActionsContext.Provider>
      </DndProvider>
    </div>
  );
}

export default App;