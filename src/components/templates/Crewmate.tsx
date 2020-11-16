import React from 'react';
import styled from 'styled-components';
import ActionsContext from '../../contexts/handlerContext';
import { mediaQueries } from '../../theme';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import ListsWrapper from '../atoms/ListsWrapper';
import GameColorPicker from '../organisms/GameColorPicker';
import List from '../organisms/List';

const Crewmate = () => {
  const { endGameAction } = React.useContext(ActionsContext);

  return (
    <Wrapper data-tut="reactour__crewmate-start">
      <ListsWrapper data-tut="reactour__crewmate-boxes">
        <List title="Suspicious" />
        <List title="Clear" />
        <List title="Grouped" />
        <List title="Dead" />
      </ListsWrapper>
      <Meta>
        <GameColorPicker />
        <TitleContainer>
          <Heading variant="Big">Crewmate</Heading>
          {!!endGameAction && (
            <Button
              variant="small"
              onClick={() => endGameAction()}
              data-tut="reactour__crewmate-end-game"
            >
              End Game
            </Button>
          )}
        </TitleContainer>
      </Meta>
    </Wrapper>
  )
}

export default Crewmate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    flex-direction: column-reverse;
  }
`;

const Meta = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    > div:first-child {
      width: 100%;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;;


  @media screen and (max-width: ${mediaQueries.width.sm}) {
    > h2 {
      display: none;
    }
  }
`;