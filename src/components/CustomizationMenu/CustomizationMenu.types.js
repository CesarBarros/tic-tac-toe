/**
 * @typedef {Object} CustomizationMenuParams
 * @property {(colorKey: string, newColor: string) => void} onColorChange
 * @property {CustomColors} colors
 * @property {boolean} showMenu
 * @property {() => void} onToggleMenu
 */

/**
 * @typedef {Object} CustomColors
 * @property {string} playerX
 * @property {string} playerO
 * @property {string} cell
 * @property {string} cellBorder
 */

/**
 * @typedef {ButtonParams & Object} CustomizationButtonProps
 * @property {boolean} showMenu
 */

/**
 * @typedef {Object} CustomizationMenuWrapperProps
 * @property {boolean} showMenu
 * @property {CustomColors} colors
 */

/**
 * @typedef {Object} CustomizationTitleProps
 * @property {Theme} theme
 */

/**
 * @typedef {Object} ColorLabelProps
 * @property {Theme} theme
 */

/**
 * @typedef {Object} ColorPickerProps
 * @property {string} label
 * @property {string} value
 * @property {(key: string, value: string) => void} onChange
 * @property {string} colorKey
 */
