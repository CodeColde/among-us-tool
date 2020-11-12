import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>Made with &#10084;&#65039; by <a href="https://www.hayofriese.dev" target="_blank" rel="noreferrer noopener">CodeColde</a></p>
      <p>Send me your{" "}
        <a
          data-tut="reactour__feedback"
          href="mailto:hayo.web@gmail.com?subject=Among%20us%20-%20Feedback"
        >
          feedback
        </a>
        .
      </p>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  text-align:center;
  justify-self: flex-end;
`;