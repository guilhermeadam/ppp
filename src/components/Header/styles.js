import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 144px;

  background: #253E92;

  display: flex;

  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.div`
  line-height: 0.9;

  span {
    font-size: 32px;
    color: #FCFCFC;
  }

  h1 {
    font-size: 64px;
    color: #FCFCFC;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;