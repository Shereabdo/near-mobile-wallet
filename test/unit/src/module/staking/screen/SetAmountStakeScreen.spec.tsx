import { config } from "config";
import { AddStakeScreens } from "module/staking/component/core/AddStakeModal/AddStakeModal";
import SetAmountStakeScreen from "module/staking/screen/BaseSetAmountStakeScreen/AddStakeSetAmountScreen/SetAmountStakeScreen";
import { ACTION_LABEL } from "module/wallet/component/display/Balance/utils/actionLabels";
import { CURRENCY_UNIT } from "module/wallet/component/display/Balance/utils/currencies";
import {
    AccountBalanceMock,
    UseGetBalanceMock,
    UseNativeTokenConversionMock,
    UseServiceInstanceMock,
    UseSetTabMock,
    UseWalletStateMock,
} from "test-mocks";
import { fireEvent, render, screen, translate, waitFor } from "test-utils";

describe("Test for SetAmountStakeScreen component", () => {
    test("Renders correctly", async () => {
        new UseServiceInstanceMock();
        new UseWalletStateMock();
        new UseNativeTokenConversionMock({ value: "3000" });
        const balance = new AccountBalanceMock({ available: "1500.55" });
        new UseGetBalanceMock({ balance });
        render(<SetAmountStakeScreen />);

        const available = await screen.findByText(
            translate("available_balance", {
                amount: "1,500.55 " + config.tokenName,
                amount_price: ACTION_LABEL["round"] + " 3,000 " + CURRENCY_UNIT["usd"],
            }),
        );
        expect(available).toBeDefined();
    });

    test("Navigates to next screen", async () => {
        const { setTab } = new UseSetTabMock();
        new UseServiceInstanceMock();
        new UseWalletStateMock();
        new UseNativeTokenConversionMock({ value: "3000" });
        new UseGetBalanceMock();
        render(<SetAmountStakeScreen />);
        const input = screen.getByPlaceholderText(translate("enter_amount"));
        const btn = screen.getByText(translate("next"));
        await screen.findByText("Max");
        fireEvent.changeText(input, "100");
        fireEvent.press(btn);
        await waitFor(() => expect(setTab).toHaveBeenCalledWith(AddStakeScreens.SELECT_VALIDATOR));
    });
});