import { TransactionType } from "ckb-peersyst-sdk";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";

export type GetTransactionAmountUtilsResult = { primary?: boolean; action: BalanceProps["action"] } | undefined;

export default function (type: FullTransaction["type"]): GetTransactionAmountUtilsResult {
    switch (type) {
        case TransactionType.SEND_NATIVE_TOKEN:
        case TransactionType.SEND_NFT:
        case TransactionType.SEND_TOKEN:
        case TransactionType.DEPOSIT_DAO:
        case TransactionType.SMART_CONTRACT_SEND:
            return {
                action: "display",
            };
        case TransactionType.RECEIVE_NATIVE_TOKEN:
        case TransactionType.RECEIVE_NFT:
        case TransactionType.RECEIVE_TOKEN:
        case TransactionType.SMART_CONTRACT_RECEIVE:
        case TransactionType.UNLOCK_DAO:
        case TransactionType.WITHDRAW_DAO:
            return {
                action: "add",
                primary: true,
            };
    }
}