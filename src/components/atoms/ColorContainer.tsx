import styled from "styled-components";
import { colors, mediaQueries } from "../../theme";

const ColorContainer = styled.div<{ swapInMobile?: boolean }>`
  background-color: ${colors.blackLight};
  padding: 2rem;
  max-width: 540px;
  min-width: 415px;
  min-height: 27rem;
  margin-top: 9.6rem;
  box-sizing: border-box;

  > div:first-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  > div:last-child {
    margin: 2.4rem auto 0;
  }

  @media screen and (max-width: ${mediaQueries.width.lg}) {
    max-width: 184px;
    min-width: 145px;
    height: 840px;

    > div:nth-child(2) {
      height: 80%;
      margin-bottom: 20px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    > div:last-child {
      width: 100% !important;
    }
  }

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    max-width: inherit;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0rem;

    > h4 {
      display: none;
    }

    > div:first-child {
      overflow-y: auto;
      margin-right: 4px;
    }

    ${({ swapInMobile }) => swapInMobile && `
      > div:nth-child(2) {
        direction: rtl;
      }`
    }

    > div {
      margin: 0;
    }
  }
`;

export default ColorContainer;