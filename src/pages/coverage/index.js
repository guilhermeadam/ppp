import * as S from './styles';

import { Container } from '../../components/Container';

export default function Coverage() {
  return (
    <Container>

      <S.Box>

        <S.Header>
          <span>Bloco 01</span>
          <S.Divider />
          <span>RMF Sul e RMC</span>
        </S.Header>

        <S.Content>

          <S.ContainerInfo>

            <S.Info>
              <strong>17</strong>
              <span>Municípios no bloco</span>
            </S.Info>

            <S.Info>
              <strong>1.350.623</strong>
              <span>População no bloco</span>
            </S.Info>

            <S.Info>
              <strong>90%</strong>
              <span>Meta 2033</span>
            </S.Info>

          </S.ContainerInfo>

          <S.Dashboard></S.Dashboard>

        </S.Content>

        <S.Divider />

        <S.ButtonDetail>
          <strong>Detalhar por município</strong>
        </S.ButtonDetail>

      </S.Box>

      <S.Box>

        <S.Header>
          <span>Bloco 02</span>
          <S.Divider />
          <span>Fortaleza e RMF Norte</span>
        </S.Header>

        <S.Content>

          <S.ContainerInfo>

            <S.Info>
              <strong>7</strong>
              <span>Municípios no bloco</span>
            </S.Info>

            <S.Info>
              <strong>2.978.522</strong>
              <span>População no bloco</span>
            </S.Info>

            <S.Info>
              <strong>90%</strong>
              <span>Meta 2033</span>
            </S.Info>

          </S.ContainerInfo>

          <S.Dashboard></S.Dashboard>

        </S.Content>

        <S.Divider />

        <S.ButtonDetail>
          <strong>Detalhar por município</strong>
        </S.ButtonDetail>

      </S.Box>

    </Container>
  );
}
