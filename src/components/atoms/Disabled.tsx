import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme';

interface Props {
  onClick: () => void;
};

const Disabled: React.FC<Props> = ({ onClick }) => {
  return (
    <Wrapper
      onClick={onClick}
    >
      <OuterRim>
        <InnerCircle>
          <X />
        </InnerCircle>
      </OuterRim>
    </Wrapper>
  )
}

export default Disabled;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.2rem;
  opacity: 0.6;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

const OuterRim = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: ${colors.grayDark};
  box-sizing: border-box;
  padding: 0.7rem;
`;

const InnerCircle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: ${colors.grayLight};
  box-sizing: border-box;
  padding: 0.6rem;
`;

const X = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &::before, ::after {
    content: "";
    clear: both;
    position: absolute;
    left: 50%;
    height: 100%;
    width: 0.8rem;
    background-color: ${colors.grayDarker};
    border-radius: 0.5rem;
  }

  &::before {
    transform: translateX(-50%) rotate(-45deg);
  }
  &::after {
    transform: translateX(-50%) rotate(45deg);
  }
`;