import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { IColors, ItemTypes } from '../../entities';
import { colors, mediaQueries } from '../../theme';
import Heading from '../atoms/Heading';
import Plus from '../atoms/Plus';

type Variant = "default" | "large" | "small";

interface Props {
  colorsArray?: Array<IColors>;
  name: string;
  variant?: Variant;
}

const DragContainer: React.FC<Props> = ({
  colorsArray,
  name,
  variant = "default",
  children
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.COLOR,
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver;

  return (
    <Wrapper
      ref={drop}
      isActive={isActive}
      colorsArray={colorsArray}
      variant={variant}
    >
      {!!children
        ? children
        : variant === "large" && (
          <Content>
            <Plus />
            <Heading variant="Small">{
              isActive
              ? `Release to ${name.toLowerCase()}`
              : `Drag a color to ${name.toLowerCase()}`
            }</Heading>
          </Content>
        )
      }

    </Wrapper>
  )
}

export default DragContainer;

const Wrapper = styled.div<{ variant: Variant, isActive: boolean, colorsArray?: Array<IColors> }>`
  position: relative;
  box-sizing: border-box;
  background-color: ${colors.blackDark};
  border: 1rem dashed ${({ isActive, colorsArray }) => (
    (isActive || (colorsArray && colorsArray.length === 0)) ? colors.blackLight : 'transparent'
  )};
  width: 100%;
  margin: 0 auto;
  min-height: ${({ variant }) => {
    switch(variant) {
      case "large":
        return "60rem";
      case "small":
        return "18.75rem";
      default:
        return "21rem"
    }
  }};
  padding: 2rem;

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    margin: 1.2rem 0;

    min-height: ${({ variant }) => {
      switch(variant) {
        case "large":
          return "40rem";
        case "small":
          return "18.75rem";
        default:
          return "21rem"
      }
    }};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;