import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../theme";

type VariantType = "Large" | "Big" | "Default" | "Medium" | "Small" | "Tiny";

interface Props extends React.HTMLAttributes<{}> {
  variant?: VariantType;
  as?: keyof JSX.IntrinsicElements;
}

const elementMap: { [k in VariantType]: keyof JSX.IntrinsicElements } = {
  Large: "h1",
  Big: "h2",
  Default: "h3",
  Medium: "h4",
  Small: "h5",
  Tiny: "h6"
};

const Large = css`
  font-size: 9rem;
`;

const Big = css`
  font-size: 7rem;
  margin: 2.4rem 0;
`;

const Default = css`
  font-size: 5rem;
  margin: 1.6rem 0;
`;

const Medium = css`
  font-size: 3rem;
  color: ${colors.grayDark};
  margin: 0;
`;

const Small = css`
  font-size: 2.6rem;
  margin: 0;
  color: ${colors.blackLight};
`;

const Tiny = css`
  font-size: 2rem;
`;

const MainTitle = styled.h1<Props>`
  color: ${colors.black};
  user-select: none;

  ${({ variant = "Default" }) => {
    switch (variant) {
      case "Large":
        return Large;
      case "Big":
        return Big;
      case "Medium":
        return Medium;
      case "Small":
        return Small;
      case "Tiny":
        return Tiny;
      default:
        return Default;
    }
  }}
`;

const Heading: React.FC<Props> = ({
  variant = "Default",
  as = elementMap[variant],
  children,
  ...rest
}) => {
  return (
    <MainTitle variant={variant} as={as} {...rest}>
      {children}
    </MainTitle>
  );
};

export default Heading;
