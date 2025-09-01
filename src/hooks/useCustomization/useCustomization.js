import { useCallback, useState } from "react";
import { Theme } from "~/styles/Theme.styles";

/**
 * Custom hook for managing game customization options, such as player colors.
 *
 * @param {CustomColors} [initialColors] - Optional initial color settings.
 * @returns {{
 *   colors: CustomColors,
 *   showMenu: boolean,
 *   updateColor: (colorKey: string, newColor: string) => void,
 *   toggleMenu: () => void,
 * }} The current customization state and actions.
 */
export const useCustomization = (initialColors) => {
  const [colors, setColors] = useState(
    initialColors || {
      playerX: Theme.color.text.playerX || "#ff6b6b",
      playerO: Theme.color.text.playerO || "#4ecdc4",
      cell: Theme.color.background.gold.light || "#ffd75c",
      cellBorder: Theme.color.background.gold.dark || "#bf9224",
    }
  );

  const [showMenu, setShowMenu] = useState(false);

  const updateColor = useCallback((colorKey, newColor) => {
    setColors((prev) => ({ ...prev, [colorKey]: newColor }));
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return {
    colors,
    showMenu,
    updateColor,
    toggleMenu,
  };
};
