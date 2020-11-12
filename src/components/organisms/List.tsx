import React from 'react';
import styled from 'styled-components';
import ActionsContext from '../../reducer/handlerContext';
import { colors } from '../../theme';
import Heading from '../atoms/Heading';
import DragContainer from '../molecules/DragContainer';
import DraggableColor from '../molecules/DraggableColor';

interface Props {
  title: string;
  showNums?: number;
}

const List: React.FC<Props> = ({ title, showNums }) => {
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
        {showNums && colorArray.length > 0 && (
          <Total length={colorArray.length}>
            {colorArray.length}/{showNums}
          </Total>
        )}
      </DragContainer>
    </div>
  )
}

export default List;

const Total = styled.p<{ length: number }>`
  position: absolute;
  font-size: 2rem;
  bottom: 6px;
  left: 18px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  ${({ length }) => {
    if (length === 3) return `color: ${colors.red};`;
  }}
`;