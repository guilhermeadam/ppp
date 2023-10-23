import styled from 'styled-components';

export const Box = styled.div`

  width: 321px;
  height: 660px;

  background: #1E1E1E;

  border: 5px solid #2B2B2B;
  border-radius: 8px;

  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 40px;
    color: #DFDFDF;
  }

  span {
    font-weight: bold;
    font-size: 35px;
    color: #898989;
  }
`;

export const ContainerDashboard = styled.div`
  background: #A9CC00;

  height: 200px;
  width: 200px;

  border-radius: 4px;
`;

export const Divider = styled.div`
  width: 229px;
  border: 1px solid #707070;
`;

