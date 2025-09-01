import { useEffect } from "react";
import { CustomizationMenu } from "~/components/CustomizationMenu";
import { GameBoard } from "~/components/GameBoard";
import { GameStatusMessage } from "~/components/GameStatusMessage";
import { ScoreBoard } from "~/components/ScoreBoard";
import { Timer } from "~/components/Timer";
import { useCustomization } from "~/hooks/useCustomization";
import { useGameState } from "~/hooks/useGameState";
import { useScore } from "~/hooks/useScore";
import { useTimer } from "~/hooks/useTimer";
import * as S from "./game.styles";

export const Game = () => {
  const {
    board,
    currentPlayer,
    gameOver,
    makeMove,
    makeRandomMove,
    resetGame,
    winner,
  } = useGameState();
  const { scores, matchWinner, resetScores, updateScore } = useScore();
  const { timeLeft } = useTimer(makeRandomMove, gameOver, currentPlayer);
  const { colors, updateColor, showMenu, toggleMenu } = useCustomization();

  useEffect(() => {
    if (winner) return updateScore(winner);
  }, [winner, updateScore]);

  return (
    <S.GamerContainer>
      {gameOver && (
        <GameStatusMessage {...{ winner, currentPlayer, matchWinner }} />
      )}
      {!gameOver && !matchWinner && (
        <Timer timeLeft={timeLeft} currentPlayer={currentPlayer} />
      )}
      <ScoreBoard
        {...{ scores, matchWinner }}
        onResetScores={resetScores}
        onResetGame={resetGame}
      />
      <GameBoard board={board} onCellClick={makeMove} colors={colors} />

      <CustomizationMenu
        colors={colors}
        onColorChange={updateColor}
        showMenu={showMenu}
        onToggleMenu={toggleMenu}
      />
    </S.GamerContainer>
  );
};
