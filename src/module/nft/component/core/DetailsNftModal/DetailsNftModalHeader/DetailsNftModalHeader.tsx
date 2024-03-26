import { Col, Typography } from "@peersyst/react-native-components";

export interface DetailsNftModalHeaderProps {
    title?: string;
    owner?: string;
}

function DetailsNftModalHeader({ title, owner }: DetailsNftModalHeaderProps): JSX.Element {
    return (
        <Col gap={6}>
            {title && (
                <Typography variant="body1Strong" numberOfLines={1}>
                    {title}
                </Typography>
            )}

            {owner && (
                <Typography variant="body3Strong" numberOfLines={1} color="primary">
                    {owner}
                </Typography>
            )}
        </Col>
    );
}

export default DetailsNftModalHeader;
