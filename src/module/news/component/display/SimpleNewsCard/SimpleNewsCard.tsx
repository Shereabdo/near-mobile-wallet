import { NewDate, NewsImage, NewTitle, SimpleNewsCardRoot } from "./SimpleNewsCard.styles";
import { Linking, TouchableWithoutFeedback } from "react-native";
import formatDate from "utils/formatDate";
import { Col, WithSkeleton, withSkeleton } from "@peersyst/react-native-components";
import { formatNews } from "module/news/utils/formatNews";
import { NewsDto } from "module/news/types";
import { useTranslate } from "module/common/hook/useTranslate";

const SimpleNewsCard = ({ ...news }: WithSkeleton<NewsDto>): JSX.Element => {
    const { uri, title, imageUri, date } = formatNews(news);
    const t = useTranslate();
    return (
        <TouchableWithoutFeedback onPress={() => Linking.openURL(uri)}>
            <SimpleNewsCardRoot elevation={0}>
                <Col gap={12} justifyContent="center">
                    <NewsImage source={{ uri: imageUri }} />
                    <Col gap={2}>
                        <NewDate variant="body3Regular">{formatDate(new Date(date), "weekday", t("idiom"))}</NewDate>
                        <NewTitle variant="body2Strong">{title}</NewTitle>
                    </Col>
                </Col>
            </SimpleNewsCardRoot>
        </TouchableWithoutFeedback>
    );
};

export default withSkeleton(SimpleNewsCard);
