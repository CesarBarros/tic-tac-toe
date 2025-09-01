/**
 * @typedef {Object} Scores
 * @property {number} X
 * @property {number} O
 */

/**
 * @typedef {Object} ScoreBoardParams
 * @property {Scores} scores
//  * @property {"O" | "X" | null} matchWinner
 * @property {() => void} onResetScores
 * @property {() => void} onResetGame
 */

/**
 * @typedef {Object} ScoreBoardContainerParams
 * @property {Theme} theme
 */
