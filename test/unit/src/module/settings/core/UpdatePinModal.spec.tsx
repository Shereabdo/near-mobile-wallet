import { translate } from "locale";
import { fireEvent, render } from "test-utils";
import UpdatePinModal from "module/settings/components/core/UpdatePinModal/UpdatePinModal";
import { WalletStorage } from "module/wallet/WalletStorage";

describe("Test for the UpdatePinScreen", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", () => {
        const screen = render(<UpdatePinModal />);
        expect(screen.getByText(translate("update_your_pin")));
        expect(screen.getAllByTestId("BackIcon"));
        expect(screen.getByText(translate("enter_new_pin")));
    });
    test("Updates pin correctly", () => {
        jest.useFakeTimers();
        const mockedWalletStorage = { name: "", pin: "", mnemonic: [] };
        jest.spyOn(WalletStorage, "get").mockImplementation(() => new Promise((resolve) => resolve(mockedWalletStorage)));
        const setWalletStorage = jest.spyOn(WalletStorage, "set").mockImplementation(() => new Promise((resolve) => resolve()));
        const screen = render(<UpdatePinModal />);
        for (let i = 1; i < 5; i++) {
            fireEvent.press(screen.getByText(i.toString()));
        }
        expect(screen.getByText(translate("repeat_pin"))).toBeDefined();
        for (let i = 1; i < 5; i++) {
            fireEvent.press(screen.getByText(i.toString()));
        }
        jest.runAllTimers();
        expect(setWalletStorage).toHaveBeenCalledWith(expect.objectContaining({ ...mockedWalletStorage, pin: "1234" }));
        jest.useRealTimers();
    });
    test("Not updating pin correctly", () => {
        jest.useFakeTimers();
        const mockedWalletStorage = { name: "", pin: "", mnemonic: [] };
        jest.spyOn(WalletStorage, "get").mockImplementation(() => new Promise((resolve) => resolve(mockedWalletStorage)));
        const setWalletStorage = jest.spyOn(WalletStorage, "set").mockImplementation(() => new Promise((resolve) => resolve()));
        const screen = render(<UpdatePinModal />);
        for (let i = 9; i > 5; i--) {
            fireEvent.press(screen.getByText(i.toString()));
        }
        expect(screen.getByText(translate("repeat_pin"))).toBeDefined();
        for (let i = 4; i < 8; i++) {
            fireEvent.press(screen.getByText(i.toString()));
        }
        jest.runAllTimers();
        expect(setWalletStorage).not.toHaveBeenCalledWith(expect.objectContaining({ ...mockedWalletStorage, pin: "1234" }));
        jest.useRealTimers();
    });
});
