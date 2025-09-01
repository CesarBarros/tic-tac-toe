import * as S from "./Time.styles";

export const Timer = ({ timeLeft, currentPlayer }) => {
  return (
    <S.TimerContainer {...{ timeLeft }}>
      <S.TimerPlayer>Turno do Jogador {currentPlayer}</S.TimerPlayer>
      <S.TimerCount {...{ timeLeft }}>{timeLeft}s</S.TimerCount>
    </S.TimerContainer>
  );
};
