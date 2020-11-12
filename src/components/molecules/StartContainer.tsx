import React from 'react';
import styled from 'styled-components';
import ActionsContext from '../../reducer/handlerContext';
import { mediaQueries } from '../../theme';
import Button from '../atoms/Button';

const StartContainer = () => {
  const { state, startGameAction } = React.useContext(ActionsContext);

  return (
    <Wrapper data-tut="reactour__start-game">
      <Button
        variant="large"
        onClick={() => startGameAction && state
          && state.colors.length > 3
          && !!state.playerType
          && startGameAction()}
      >
        Start
      </Button>
    </Wrapper>
  )
}

export default StartContainer;

const Wrapper = styled.div`
  > div {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    display: flex;
  }
`;