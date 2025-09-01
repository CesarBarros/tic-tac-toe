import * as S from "./Button.styles";

export const Button = (
  /** @type ButtonParams */ { label, onClick, className, disabled }
) => {
  return (
    <S.Button onClick={onClick} className={className} disabled={disabled}>
      {label}
    </S.Button>
  );
};
