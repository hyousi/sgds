import styled from "@emotion/styled";
import { variant, compose, space, SpaceProps } from "styled-system";

type ButtonStyle = {
  bg: string;
  borderColor: string;
  color: string;
};

// type VariantKey = "primary" | "secondary" | "success" | "danger";
type VariantKey = "primary";

const variants = {
  primary: {
    bg: "primary",
    borderColor: "primary",
    color: "white"
  }
};

interface ButtonProps extends SpaceProps {
  variant: keyof typeof variants;
  outline: boolean;
}

const Button = styled.button<Partial<ButtonProps>>((props) =>
  compose(
    space,
    variant<ButtonStyle, VariantKey>({
      variants: {
        primary: {
          bg: props.outline ? "white" : "primary",
          borderColor: "primary",
          color: props.outline ? "primary" : "white"
        }
        // secondary: {
        //   bg: "",
        //   borderColor: "",
        //   color: ""
        // },
        // success: {
        //   bg: "",
        //   borderColor: "",
        //   color: ""
        // },
        // danger: {
        //   bg: "",
        //   borderColor: "",
        //   color: ""
        // }
      }
    })
  )
);

Button.defaultProps = {
  variant: "primary",
  outline: false
};

export default Button;
