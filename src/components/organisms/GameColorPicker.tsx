import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../entities';
import ActionsContext from '../../reducer/handlerContext';
import ColorContainer from '../atoms/ColorContainer';
import Heading from '../atoms/Heading';
import DraggableColor from '../molecules/DraggableColor';

const GameColorPicker = () => {
  const menuOptions = ["", "Add players", "Start"];
  const { state, manageColorsAction } = React.useContext(ActionsContext);
  const baseColorSelection = state ? state.colors.filter(color => menuOptions.includes(color.list)) : [];

  const [, drop] = useDrop({
    accept: ItemTypes.COLOR,
    drop: () => ({ name: "Start" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <ColorContainer ref={drop}>
      <Heading variant="Medium">Players</Heading>
      <div>
        {baseColorSelection.length > 0 && baseColorSelection.map(color => menuOptions.includes(color.list) && (
          <DraggableColor
            key={color.color}
            color={color.color}
            manageColorsAction={(list) => manageColorsAction && manageColorsAction(color.color, list)}
          />
        ))}
      </div>
    </ColorContainer>
  )
}

export default GameColorPicker;