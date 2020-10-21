import React from 'react';
import styled from 'styled-components';
import ActionsContext from '../../reducer/handlerContext';
import PlayerTypeButton from '../molecules/PlayerTypeButton';

const TypeSelector = () => {
  const { state } = React.useContext(ActionsContext);

  return (
    <Wrapper>
      <PlayerTypeButton
        active={state ? state.playerType : ""}
        type="Crewmate"
      />
      <PlayerTypeButton
        active={state ? state.playerType : ""}
        type="Impostor"
      />
    </Wrapper>
  )
}

export default TypeSelector;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 0.5rem;
  justify-content: space-between;
`;