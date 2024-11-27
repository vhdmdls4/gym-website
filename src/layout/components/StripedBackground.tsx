import styled from 'styled-components'

export const StripedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: rgb(0, 0, 0);
  filter: blur(100px);
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 1) 5%,
    rgba(29, 26, 57, 1) 15%,
    rgba(52, 34, 60, 1) 22%,
    rgba(29, 26, 57, 1) 28%,
    rgba(20, 18, 34, 1) 35%,
    rgba(16, 16, 16, 1) 100%
  );
`
