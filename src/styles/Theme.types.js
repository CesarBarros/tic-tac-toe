/**
 * @typedef {Object} ContainerTheme
 * @property {string} maxWidth
 */

/**
 * @typedef {Object} GoldColors
 * @property {string} light
 * @property {string} dark
 */

/**
 * @typedef {Object} BackgroundColors
 * @property {string} primary
 * @property {string} secondary
 * @property {GoldColors} gold
 * @property {string} light
 * @property {string} black
 * @property {string} white
 */

/**
 * @typedef {Object} BorderColors
 * @property {string} gray
 */

/**
 * @typedef {Object} TextColors
 * @property {string} primary
 * @property {string} secondary
 * @property {string} gray
 * @property {string} lightGray
 * @property {string} black
 * @property {string} white
 */

/**
 * @typedef {Object} NotificationColors
 * @property {string} error
 * @property {string} success
 * @property {string} warning
 */

/**
 * @typedef {Object} ColorTheme
 * @property {BackgroundColors} background
 * @property {BorderColors} border
 * @property {TextColors} text
 * @property {NotificationColors} notification
 */

/**
 * @typedef {Object} ZIndexTheme
 * @property {number} background
 * @property {number} content
 * @property {number} header
 * @property {number} overlay
 * @property {number} modal
 * @property {number} tooltip
 * @property {number} dropdown
 * @property {number} alert
 * @property {number} popup
 * @property {number} highest
 */

/**
 * @typedef {Object} Theme
 * @property {ContainerTheme} container
 * @property {ColorTheme} color
 * @property {number} spacing
 * @property {ZIndexTheme} zIndex
 */
