import styled from 'styled-components';
import { mediaQueries } from '../../theme';

const ListsWrapper = styled.div`
  box-sizing: border-box;
  padding: 1.2rem;
  flex: 3;
  max-width: 125rem;

  @media screen and (max-width: ${mediaQueries.width.lg}) {
    max-height: 1180px;
    overflow-y: auto;
  }

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    width: 100%;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    > div {
      width: 100%;
    }
  }
`;

export default ListsWrapper;