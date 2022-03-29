import { SendIcon, ReceiveIcon } from "icons";
import { translate } from "locale";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import { useModal } from "react-native-components";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import CardButtons from "module/common/component/input/CardButtons/CardButtons";

const CARD_BUTTON_ICON_SIZE = 18;

const DaoCardButtons = (): JSX.Element => {
    const { showModal } = useModal();
    return (
        <CardButtons
            //Left props
            leftLabel={translate("deposit")}
            leftIcon={<SendIcon style={{ fontSize: CARD_BUTTON_ICON_SIZE }} />}
            leftButtonOnPress={() => showModal(SendModal)}
            //Right props
            rightLabel={translate("withdrawl")}
            rightIcon={<ReceiveIcon style={{ fontSize: CARD_BUTTON_ICON_SIZE }} />}
            rightButtonOnPress={() => showModal(ReceiveModal)} 
        />
    );
};

export default DaoCardButtons;
