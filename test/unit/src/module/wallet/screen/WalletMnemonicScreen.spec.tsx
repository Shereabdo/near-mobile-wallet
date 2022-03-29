import { render } from "test-utils";
import WalletMnemonicScreen from "module/wallet/screen/WalletMnemonicScreen";
import { translate } from "locale";
import { fireEvent } from "@testing-library/react-native";
import * as UseCreateWalletState from "module/wallet/hook/useCreateWallet";
import * as UseTabs from "module/common/component/base/navigation/Tabs/hook/useTabs";
import { CreateWalletScreens } from "module/wallet/navigator/CreateWalletNavigatorGroup";
import { createMockedUseCreateWallet } from "mocks/useCreateWallet";

describe("WalletMnemonicScreen tests", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", () => {
        const screen = render(<WalletMnemonicScreen />);

        screen.getByText(translate("keep_this_safe"));

        screen.getByText("witch");
        screen.getByText("despair");
        screen.getByText("road");

        screen.getByText(translate("next"));
    });

    test("Sets wallet mnemonic state and navigates to enter wallet mnemonic", () => {
        const setMnemonic = jest.fn();
        const mockedCreateWallet = createMockedUseCreateWallet(jest.fn(), jest.fn(), setMnemonic);
        jest.spyOn(UseCreateWalletState, "default").mockReturnValue(mockedCreateWallet);
        const setTab = jest.fn();
        jest.spyOn(UseTabs, "default").mockReturnValue([0, setTab]);

        const screen = render(<WalletMnemonicScreen />);

        const nextButton = screen.getByText(translate("next"));
        fireEvent.press(nextButton);

        expect(setMnemonic).toHaveBeenCalledWith([
            "witch",
            "collapse",
            "practice",
            "feed",
            "shame",
            "open",
            "despair",
            "creek",
            "road",
            "again",
            "ice",
            "least",
        ]);
        expect(setTab).toHaveBeenCalledWith(CreateWalletScreens.PICK_WALLET_MNEMONIC);
    });
});
