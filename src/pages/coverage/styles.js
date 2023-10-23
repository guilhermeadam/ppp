import styled from 'styled-components';

export const Box = styled.div`

  width: 852px;
  height: 660px;

  background: #1E1E1E;

  border: 5px solid #2B2B2B;
  border-radius: 8px;

  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 25px;
    color: #DFDFDF;
    word-break: keep-all;
  }
`;

export const Divider = styled.div`
  border: 4px solid #2B2B2B;
  width: 395px;
`;

export const Content = styled.div`
  display: flex;
  gap: 32px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.9;

  strong {
    font-size: 64px;
    color: #FCFCFC;
  }

  span {
    font-size: 29px;
    color: #898989;
  }
`;

export const Dashboard = styled.div`
  background: #A9CC00;

  border-radius: 4px;

  margin-left: 32px;

  width: 400px;
  height: 400px;
`;

export const ButtonDetail = styled.button`
  padding: 8px 24px;

  border-radius: 4px;
  border: 1px solid #00A1E6;
  background: #00A1E6;

  strong {
    color: #FCFCFC;
  }
`;
