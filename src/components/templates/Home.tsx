import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../theme';
import FullWrapper from '../atoms/FullWrapper';
import Heading from '../atoms/Heading';
import StartContainer from '../molecules/StartContainer';
import AddPlayers from '../organisms/AddPlayers';
import Footer from '../organisms/Footer';
import HomeColorPicker from '../organisms/HomeColorPicker';
import TypeSelector from '../organisms/TypeSelector';

const Home = () => {
  return (
    <FullWrapper>
      <Wrapper>
        <DetailsContainer>
          <Heading data-tut="reactour__title">Among Us Sus Tool</Heading>
          <AddPlayers />
          <TypeSelector />
          <StartContainer />
        </DetailsContainer>
        <Containers>
          <HomeColorPicker />
        </Containers>
      </Wrapper>
      <Footer />
    </FullWrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    flex-direction: column-reverse;
  }
`;

const Containers = styled.div`
  padding: 2rem 6rem;

  @media screen and (max-width: ${mediaQueries.width.xxl}) {
    padding: 2rem 3rem;
  }

  @media screen and (max-width: ${mediaQueries.width.sm}) {
    padding: 0 3rem;
  }
`;

const DetailsContainer = styled(Containers)`
  flex: 3;
  max-width: 110rem;
`;