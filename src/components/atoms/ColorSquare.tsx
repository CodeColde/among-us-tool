import styled from 'styled-components';
import { mediaQueries } from '../../theme';
import amongUsColors from '../../theme/amongUsColors';

interface Props {
  color: string;
  isDragging?: boolean;
}

const ColorSquare = styled.div<Props>`
  background-color: ${({ color }) => amongUsColors[color]};
  opacity: ${({ isDragging }) => isDragging ? 0.4 : 1};
  width: 100px;
  height: 100px;
  margin: 1.2rem;
  display: inline-block;
  box-shadow: 0.2rem 0.3rem 1.2rem rgba(0,0,0,0.2);

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${mediaQueries.width.md}) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    direction: ltr;
  }
`;

export default ColorSquare;

