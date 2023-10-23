import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #255F92;

  width: 100%;
  min-height: 59px;

  justify-content: space-between;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ isSelected }) => isSelected ? '#A9CC00' : ''};

  width: 320px;
  height: 100%;

  cursor: pointer;

  span {
    font-size: 32px;
    color: #FCFCFC;
    font-weight: ${({ isSelected }) => isSelected ? 700 : ''};
  }
`;
