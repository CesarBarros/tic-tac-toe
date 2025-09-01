import "./Theme.types";

/**
 * @type {Theme}
 */
export const Theme = {
  container: {
    maxWidth: "1360px",
  },
  color: {
    background: {
      primary: "#005CA9",
      secondary: "#fdcb6e",
      gold: {
        light: "#ffd75c",
        dark: "#bf9224",
      },
      light: "rgb(233, 233, 233)",
      black: "#000",
      white: "#fff",
    },
    border: {
      gray: "#888",
    },
    text: {
      primary: "#005CA9",
      secondary: "#D87B00",
      gray: "#333",
      lightGray: "#666",
      black: "#000",
      white: "#fff",
      playerX: "#ff6b6b",
      playerO: "#4ecdc4",
    },
    notification: {
      error: "#d32f2f",
      success: "#388e3c",
      warning: "#f57c00",
    },
  },
  spacing: 4,
  zIndex: {
    background: 10,
    content: 20,
    header: 30,
    overlay: 40,
    modal: 50,
    tooltip: 60,
    dropdown: 70,
    alert: 80,
    popup: 90,
    highest: 100,
  },
};
