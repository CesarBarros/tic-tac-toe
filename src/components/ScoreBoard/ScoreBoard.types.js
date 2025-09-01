/**
 * @typedef {Object} Scores
 * @property {number} X
 * @property {number} O
 */

/**
 * @typedef {Object} ScoreBoardParams
 * @property {Scores} scores
 * @property {"O" | "X" | null} matchWinner
 * @property {() => void} onResetScores
 */

/**
 * @typedef {Object} ScoreBoardContainerParams
 * @property {Theme} theme
 * @property {"O" | "X" | "draw" | null} winner
 */

/**
 * @typedef {Object} MatchWinnerMessageParams
 * @property {Theme} theme
 */
