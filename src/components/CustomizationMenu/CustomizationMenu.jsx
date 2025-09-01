import * as S from "./CustomizationMenu.styles";

const ColorPicker = (
  /** @type ColorPickerProps */ { label, value, onChange, colorKey }
) => (
  <div style={{ marginBottom: "15px" }}>
    <S.ColorLabel>{label}:</S.ColorLabel>
    <S.ColorInput
      value={value}
      onChange={(e) => onChange(colorKey, e.target.value)}
    />
  </div>
);

export const CustomizationMenu = (
  /** @type {CustomizationMenuParams} */ {
    colors,
    onColorChange,
    showMenu,
    onToggleMenu,
  }
) => {
  return (
    <>
      <S.CustomizationButton
        {...{ showMenu }}
        onClick={onToggleMenu}
        label="🎨"
      />

      <S.CustomizationMenuWrapper {...{ showMenu, colors }}>
        <S.CustomizationTitle>Personalizar Cores</S.CustomizationTitle>

        <ColorPicker
          label="Jogador X"
          value={colors.playerX}
          onChange={onColorChange}
          colorKey="playerX"
        />
        <ColorPicker
          label="Jogador O"
          value={colors.playerO}
          onChange={onColorChange}
          colorKey="playerO"
        />
        <ColorPicker
          label="Células"
          value={colors.cell}
          onChange={onColorChange}
          colorKey="cell"
        />
        <ColorPicker
          label="Bordar da célula"
          value={colors.cellBorder}
          onChange={onColorChange}
          colorKey="cellBorder"
        />
      </S.CustomizationMenuWrapper>
    </>
  );
};
