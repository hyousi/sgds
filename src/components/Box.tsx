import { color, space, ColorProps, SpaceProps } from "styled-system";
import styled from "@emotion/styled";

interface BoxProps extends ColorProps, SpaceProps {}

const Box = styled.div<BoxProps>`
  ${color}
  ${space}
`;

const B = styled["div"]<BoxProps>(color, space);

export default Box;
