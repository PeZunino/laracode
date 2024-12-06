import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
  text: string;
  w: number;
  h: number;
  fontSize: number;
}
export function Button({
  variant = "primary",
  text,
  h,
  w,
  fontSize,
}: ButtonProps) {
  return (
    <ButtonContainer fontSize={fontSize} h={h} w={w} variant={variant}>
      {text}
    </ButtonContainer>
  );
}
