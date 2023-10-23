import * as S from './styles';

import ambientalLogo from '../../assets/images/ambiental.png';
import cageceLogo from '../../assets/images/cagece.png';

export default function Header() {
  return (
    <S.Container>

      <S.ContainerTitle>
        <span>DASHBOARD</span>
        <h1>Universalização do Esgotamento</h1>
      </S.ContainerTitle>

      <S.ContainerLogo>
        <img
          src={ambientalLogo}
          alt="Logo da Ambiental"
          width={163}
          height={50}
        />
        <img
          src={cageceLogo}
          alt="Logo da Cagece"
          width={435}
          height={103}
        />
      </S.ContainerLogo>

    </S.Container>
  );
}
