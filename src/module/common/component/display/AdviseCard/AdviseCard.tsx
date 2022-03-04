import { AdviseCardProps } from "module/common/component/display/AdviseCard/AdviseCard.types";
import Card from "module/common/component/surface/Card/Card";
import { Col, Row, Typography } from "react-native-components";
import { translate } from "locale";
import CountdownButton from "../../input/CountdownButton/CountdownButton";
import { BackIconButton } from "./AdviseCard.styles";
import { BackIcon } from "icons";

const AdviseCard = ({ number, totalAdvises, text, style, onBack, onNext }: AdviseCardProps): JSX.Element => {
    return (
        <Card style={{ flex: 1, ...style }}>
            <Col flex={1} justifyContent="space-between">
                <Col gap={15}>
                    <Typography variant="h3" textTransform="uppercase" textAlign="center" fontWeight="700">
                        {translate("advise") + " " + number}
                    </Typography>
                    {totalAdvises && (
                        <Typography variant="body2" textAlign="center">
                            {number + "/" + totalAdvises}
                        </Typography>
                    )}
                </Col>
                <Typography variant="body2">{text}</Typography>
                <Row justifyContent={onBack ? "space-between" : "flex-end"} alignItems="center" style={{ height: 60 }}>
                    {onBack && (
                        <BackIconButton onPress={onBack}>
                            <BackIcon />
                        </BackIconButton>
                    )}
                    {onNext && (
                        <CountdownButton style={{ width: 150 }} seconds={10} onPress={onNext}>
                            {translate("next")}
                        </CountdownButton>
                    )}
                </Row>
            </Col>
        </Card>
    );
};

export default AdviseCard;
