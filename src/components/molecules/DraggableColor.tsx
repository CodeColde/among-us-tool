import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { ItemTypes } from '../../entities';
import ActionsContext from '../../contexts/handlerContext';
import ColorSquare from '../atoms/ColorSquare';
import screenshake from '../../utils/screenshake';

interface Props {
  color: string;
  manageColorsAction?: (list?: string) => void;
}

const DraggableColor: React.FC<Props> = ({
  color,
  manageColorsAction,
}) => {
  const { state } = React.useContext(ActionsContext);
  const [{ isDragging }, drag] = useDrag({
    item: { color, type: ItemTypes.COLOR },
    end: (item: { color: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (dropResult && state) {
        const impostorCheck = state.colors.filter(el => el.list === "Impostor").length > 2 && dropResult.name === "Impostor";
        impostorCheck && screenshake();
        !impostorCheck && manageColorsAction && manageColorsAction(dropResult.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <ColorSquare
      ref={drag}
      color={color}
      isDragging={isDragging}
    />
  )
}

export default DraggableColor;