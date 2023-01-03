import { Col, FormControlledComponentProps, Row } from "@peersyst/react-native-components";
import Container from "module/common/component/display/Container/Container";
import Typography from "module/common/component/display/Typography/Typography";
import { useTranslate } from "module/common/hook/useTranslate";
import Fee from "module/transaction/component/display/Fee/Fee";
import { AssetType } from "module/wallet/wallet.types";
import { NftToken, Token } from "near-peersyst-sdk";
import { TouchableWithoutFeedback } from "react-native";
import { ChevronDownIcon } from "./WalletAssetSelect.styles";
import { WalletAssetSelectModal } from "./WalletAssetSelectModal/WalletAssetSelectModal";

export interface Asset {
    type: AssetType;
    nft?: NftToken;
    ft?: Token;
}

export type WalletAssetSelectProps = FormControlledComponentProps<Asset>;

export interface InnerWalletAssetSelectProps {
    value: Asset;
    onChange: (value: Asset) => void;
}

const WalletAssetSelect = () => {
    const translate = useTranslate();
    return (
        <WalletAssetSelectModal>
            {({ showModal }) => (
                <TouchableWithoutFeedback onPress={showModal}>
                    <Container>
                        <Col alignItems="center" flex={1} gap="2%">
                            <Row alignItems="center" gap={5} justifyContent="center">
                                <Typography variant="body1Strong">{translate("select_asset")}</Typography>
                                <ChevronDownIcon />
                            </Row>
                            <Fee tag="body2" />
                        </Col>
                    </Container>
                </TouchableWithoutFeedback>
            )}
        </WalletAssetSelectModal>
    );
};

export default WalletAssetSelect;