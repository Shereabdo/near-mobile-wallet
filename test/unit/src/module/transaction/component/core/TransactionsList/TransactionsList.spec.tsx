import * as UseWallet from "module/wallet/hook/useWallet";
import * as GetTransactions from "module/transaction/mock/getTransactions";
import { transactions } from "mocks/transaction";
import { render, SuccessApiCall } from "test-utils";
import { waitFor } from "@testing-library/react-native";
import TransactionsList from "module/transaction/component/core/TransactionsList/TransactionsList";

describe("TransactionsList tests", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly with an account", async () => {
        jest.spyOn(UseWallet, "default").mockReturnValue({
            state: {
                hasWallet: true,
                isAuthenticated: true,
                isFirstTime: false,
                cells: [{ address: "address", balance: "1" }],
                selectedAccount: 0,
            },
            setAuthenticated: jest.fn(),
            setCells: jest.fn(),
            setSelectedAccount: jest.fn(),
            setState: jest.fn(),
            reset: jest.fn(),
        });
        jest.spyOn(GetTransactions, "default").mockReturnValue(SuccessApiCall(transactions));

        const screen = render(<TransactionsList />);
        await waitFor(() => expect(screen.getByText("01/01/2022")));
        expect(screen.getByText("02/01/2022"));
        expect(screen.getByText("03/01/2022"));
    });
});
