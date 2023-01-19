import { config } from "config";
import useNativeTokenConversion from "module/common/hook/useNativeTokenConversion";
import { useTranslate } from "module/common/hook/useTranslate";
import settingsState from "module/settings/state/SettingsState";
import { useFormatBalance } from "module/wallet/component/display/Balance/hook/useFormatBalance";
import useGetBalance from "module/wallet/query/useGetBalance";
import { substractNearAmounts } from "near-peersyst-sdk";
import { useRecoilValue } from "recoil";

export interface UseNEARAmountWithMaxTextFieldControllerParams {
    index?: number;
    maxAmount?: string;
}

export function useNEARAmountWithMaxTextFieldController({ index, maxAmount }: UseNEARAmountWithMaxTextFieldControllerParams) {
    const translate = useTranslate();
    const { data: { available: availableBalance } = { available: "0" } } = useGetBalance(index);

    const finalAvailable = maxAmount ? maxAmount : availableBalance;
    const maxBalance = substractNearAmounts(finalAvailable, config.estimatedFee);

    const { value: maxBalanceInFiat } = useNativeTokenConversion(maxBalance);
    const { fiat } = useRecoilValue(settingsState);
    const formattedBalanceInFiat = useFormatBalance(maxBalanceInFiat, {
        numberFormatOptions: { maximumFractionDigits: 2 },
        units: fiat,
        action: "round",
    });

    const formattedBalance = useFormatBalance(maxBalance, {
        numberFormatOptions: { maximumFractionDigits: 2 },
        units: config.tokenName,
    });

    return {
        hint: translate("available_balance", { amount: formattedBalance, amount_price: formattedBalanceInFiat })!,
        maxBalance,
    };
}