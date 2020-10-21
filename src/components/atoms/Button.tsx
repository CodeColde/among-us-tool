import styled from 'styled-components';

import { colors, mediaQueries } from "../../theme";

type IVariant = "small" | "default" | "large";

const Button = styled.div<{ variant?: IVariant, active?: boolean }>`
  user-select: none;
  border: ${({ variant }) => variant === "small" ? "0.5rem" : "0.8rem"} solid ${({ active }) => active ? colors.yellow : colors.white};
  color: ${({ active }) => active ? colors.yellow : colors.white};
  font-weight: bold;
  background-color: transparent;
  outline: none;
  padding: 1.2rem 0;
  margin: 2.4rem 0;
  text-align: center;
  font-size: ${({ variant }) => variant === "small" ? "1.92rem" : "2.56rem"};
  width: ${({ variant }) => {
    switch (variant) {
      case "small":
        return "27.5rem";
      case "large":
        return "80rem";
      default:
        return "45rem";
    }
  }};

  &:hover {
    border-color: ${({ active }) => active ? colors.yellow : colors.green};
    color: ${({ active }) => active ? colors.yellow : colors.green};
    cursor: pointer;
  }

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    margin: 1.2rem 0;
  }

  @media screen and (max-width: ${mediaQueries.width.lg}) {
    width: ${({ variant }) => {
      switch (variant) {
        case "small":
          return "17.5rem";
        case "large":
          return "40rem";
        default:
          return "25rem";
      }
    }};
  }

  @media screen and (max-width: ${mediaQueries.width.xl}) {
    width: ${({ variant }) => {
      switch (variant) {
        case "small":
          return "22.5rem";
        case "large":
          return "60rem";
        default:
          return "35rem";
      }
    }};
  }
`;

export default Button;