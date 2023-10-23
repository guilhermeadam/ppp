import * as S from './styles';

export default function Box({
  title = ''
}) {
  return (
    <S.Container>
      <strong>{title}</strong>
    </S.Container>
  );
}
