import { formatBalance as baseFormatBalance, UseFormatBalanceParams } from "module/wallet/component/display/Balance/hook/useFormatBalance";
import formatNumber from "utils/formatNumber";

export const formatBalance = ({
    balance,
    options = { maxDecimals: 2 },
    action = "display",
    units,
    unitsPosition,
}: UseFormatBalanceParams) => {
    const formattedBalance = formatNumber(balance.toString(), options);
    return baseFormatBalance({ formattedBalance, action, units, unitsPosition });
};
