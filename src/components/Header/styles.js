import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 144px;

  background: #253E92;

  display: flex;

  padding: 0 72px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.div`
  line-height: 1;

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
  gap: 34px;
`;
