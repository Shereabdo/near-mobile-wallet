import ConnectedSite from "module/wallet/component/display/ConnectedSite/ConnectedSite";
import { ConnectedSite as ConnectedSiteType } from "module/wallet/component/display/ConnectedSite/ConnectedSite.types";
import { render, screen } from "test-utils";

describe("ConnectedSite", () => {
    test("Renders correctly", () => {
        const mockConnectedSite = { name: "test", accessKey: { public_key: "publicKey" } } as ConnectedSiteType;
        render(<ConnectedSite site={mockConnectedSite} />);

        expect(screen.getByText("test")).toBeDefined();
    });
});
