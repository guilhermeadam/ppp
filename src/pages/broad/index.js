import * as S from './styles';

import { Container } from '../../components/Container';

export default function Broad() {
  return (
    <Container>

      <S.Box>
        <strong>Cobertura</strong>
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 01</span>
        <S.Divider />
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 02</span>
      </S.Box>

      <S.Box>
        <strong>Serviços</strong>
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 01</span>
        <S.Divider />
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 02</span>
      </S.Box>

      <S.Box>
        <strong>Ligações</strong>
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 01</span>
        <S.Divider />
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 02</span>
      </S.Box>

      <S.Box>
        <strong>Rede</strong>
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 01</span>
        <S.Divider />
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 02</span>
      </S.Box>

      <S.Box>
        <strong>Infraestrutura</strong>
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 01</span>
        <S.Divider />
        <S.ContainerDashboard></S.ContainerDashboard>
        <span>Bloco 02</span>
      </S.Box>

    </Container>
  );
}
