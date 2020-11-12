import React from 'react';
import styled from 'styled-components';
import ActionsContext from '../../reducer/handlerContext';
import { colors } from '../../theme';
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
      {state && state.colors.length > 0 && (
        <Total length={state.colors.length}>
          {state.colors.length}/10
        </Total>
      )}
    </DragContainer>
  )
}

export default AddPlayers;

const Total = styled.p<{ length: number }>`
  position: absolute;
  bottom: 14px;
  right: 18px;
  font-weight: bold;
  text-align: right;
  margin: 0;
  ${({ length }) => {
    if (length < 4) return `color: ${colors.red};`;
    if (length === 4) return `color: ${colors.yellow};`;
    if (length === 10) return `color: ${colors.greenDark};`;
  }}
`;