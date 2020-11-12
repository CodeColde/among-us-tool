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

const List: React.FC<Props> = ({ title, showNums, ...rest }) => {
  const { state, manageColorsAction } = React.useContext(ActionsContext);
  const colorArray = state ? state.colors.filter(color => color.list === title) : [];
  return (
    <div {...rest}>
      <Heading>
        {title}
        {" "}
        {showNums && colorArray.length > 0 && (
          <>
            <Total length={colorArray.length}>
              ({colorArray.length}/{showNums})
            </Total>
          </>
        )}
      </Heading>
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

const Total = styled.span<{ length: number }>`
  font-size: 3.5rem;
  font-weight: bold;
  margin-left: 6px;
  ${({ length }) => {
    if (length === 3) return `color: ${colors.red};`;
  }}
`;