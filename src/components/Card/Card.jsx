import * as S from "./Card.styles";

export const Card = (/** @type CardParams */ { title, subtitle }) => {
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardSubTitle>{subtitle}</S.CardSubTitle>
    </S.CardContainer>
  );
};

export const CardGroup = (/** @type CardGroupParams */ { children }) => {
  return <S.CardGroupContainer>{children}</S.CardGroupContainer>;
};
