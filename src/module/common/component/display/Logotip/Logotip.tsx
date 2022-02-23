import { AppearanceProps, SizeType } from "module/common/types";
import { Logotip as Logo } from "./Logotip.styles";

export interface LogotipProps extends AppearanceProps {
    size: SizeType;
}

export type LogotipSizeRelationsType = Record<SizeType, { width: number, height: number }>;

export default Logo;
