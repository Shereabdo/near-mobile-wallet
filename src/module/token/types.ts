import { TokenType as TokenSDKType } from "@peersyst/ckb-peersyst-sdk";

export interface TokenType extends TokenSDKType {
    imageUri: string;
    tokenName: string;
    name: string;
    description: string;
}

export interface TokenAmount {
    type: TokenType;
    amount: number;
}
