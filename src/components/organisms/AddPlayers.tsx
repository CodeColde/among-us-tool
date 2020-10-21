import React from 'react';
import ActionsContext from '../../reducer/handlerContext';
import ColorSquare from '../atoms/ColorSquare';
import DragContainer from '../molecules/DragContainer';

const AddPlayers: React.FC = () => {
  const { state } = React.useContext(ActionsContext);

  return (
    <DragContainer
      name="Add players"
      variant="large"
      colorsArray={state ? state.colors : []}
    >
      {state && state.colors && state.colors.length > 0
        ? state.colors.map(
          el => (
            <ColorSquare
              key={el.color}
              color={el.color}
            />
          )
        ) : undefined
      }
    </DragContainer>
  )
}

export default AddPlayers;