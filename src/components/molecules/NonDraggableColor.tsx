import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../theme';
import ColorSquare from '../atoms/ColorSquare';
import Disabled from '../atoms/Disabled';

interface Props {
  color: string;
  manageColorsAction?: (color: string) => void;
}

const NonDraggableColor: React.FC<Props> = ({
  color,
  manageColorsAction
}) => {
  return (
    <Wrapper>
      <Disabled onClick={() => manageColorsAction && manageColorsAction(color)}/>
      <ColorSquare
        color={color}
      />
    </Wrapper>
  )
}

export default NonDraggableColor;

const Wrapper = styled.div`
  position: relative;
  height: 124px;
  width: 124px;
  display: inline-block;

  @media screen and (max-width: ${mediaQueries.width.md}) {
    width: 104px;
    height: 104px;
  }
`;