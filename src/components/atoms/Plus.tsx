import styled from 'styled-components';
import { colors } from "../../theme";


const Plus = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 4rem;
  width: 8rem;
  height: 8rem;

  &::before, ::after{
    content: "";
    clear:both;
    z-index: 1;
    position: absolute;
    background-color: ${colors.blackLight};
  }

  &::before {
    width: 100%;
    height: 1rem;
    left:0;
    top: 50%;
    transform: translateY(-50%);
  }
  &::after {
    width: 1rem;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

export default Plus;