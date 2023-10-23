import * as S from './styles';

import { Container } from '../../components/Container';

export default function Service() {
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
              <strong>7.929</strong>
              <span>Serviços solictados</span>
            </S.Info>

            <S.Info>
              <strong>7.651</strong>
              <span>Serviços no prazo</span>
              <S.Divider color='#A9CC00' />
            </S.Info>

            <S.Info>
              <strong>278</strong>
              <span>Serviços fora do prazo</span>
              <S.Divider color='#FF0000' />
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
              <strong>13.977</strong>
              <span>Serviços solictados</span>
            </S.Info>

            <S.Info>
              <strong>13.306</strong>
              <span>Serviços no prazo</span>
              <S.Divider color='#A9CC00' />
            </S.Info>

            <S.Info>
              <strong>671</strong>
              <span>Serviços fora do prazo</span>
              <S.Divider color='#FF0000' />
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
