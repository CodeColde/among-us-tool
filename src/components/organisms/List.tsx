import React from 'react';
import ActionsContext from '../../reducer/handlerContext';
import Heading from '../atoms/Heading';
import DragContainer from '../molecules/DragContainer';
import DraggableColor from '../molecules/DraggableColor';

interface Props {
  title: string;
}

const List: React.FC<Props> = ({ title }) => {
  const { state, manageColorsAction } = React.useContext(ActionsContext);
  const colorArray = state ? state.colors.filter(color => color.list === title) : [];
  return (
    <div>
      <Heading>{title}</Heading>
      <DragContainer
        name={title}
        variant="small"
        colorsArray={colorArray}
      >
        {colorArray.length > 0 && colorArray.map(color => (
          <DraggableColor
            key={color.color}
            color={color.color}
            manageColorsAction={(list) => manageColorsAction && manageColorsAction(color.color, list)}
          />
        ))}
      </DragContainer>
    </div>
  )
}

export default List;
