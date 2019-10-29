import styled from 'styled-components';

export const Layout = styled.div`
  position: 'fixed';
  top: 0;
  left: 0;
  height: '100%';
  width: '100%';

  .themeSwitcherCt {
    align-items: center;
    display: inline-flex;
    padding: 0 ${props => props.theme.euiSizeS};
  }
`;
