import React from 'react';
import styled from 'styled-components';
import ActionsContext from '../../contexts/handlerContext';
import amongUsColors from '../../theme/amongUsColors';
import Button from '../atoms/Button';
import ColorContainer from '../atoms/ColorContainer';
import Heading from '../atoms/Heading';
import DraggableColor from '../molecules/DraggableColor';
import NonDraggableColor from '../molecules/NonDraggableColor';

const HomeColorPicker = () => {
  const { state, resetAction, manageColorsAction } = React.useContext(ActionsContext);
  return (
    <ColorContainer swapInMobile data-tut="reactour__player-selector">
      <Heading variant="Medium">Players</Heading>
      <Colors>
        {Object.keys(amongUsColors).map(color => (
          (!state || !state.colors.find(elem => elem.color === color))
            ? (
              <DraggableColor
                key={color}
                color={color}
                manageColorsAction={() => manageColorsAction && manageColorsAction(color)}
              />
            ) : (
              <NonDraggableColor
                key={color}
                color={color}
                manageColorsAction={() => manageColorsAction && manageColorsAction(color)}
              />
            )
        ))}
      </Colors>
      <Button variant="small" onClick={() => resetAction && resetAction()}>
        Reset
      </Button>
    </ColorContainer>
  )
}

export default HomeColorPicker;

const Colors = styled.div`
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;