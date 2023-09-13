import { Row, Image, Typography, IconButton } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { ExternalLinkIcon } from "icons";

export const DAppRoot = styled(Row)(({ theme }) => ({
    backgroundColor: theme.palette.background,
    borderRadius: theme.borderRadiusMd,
    padding: 12,
    alignItems: "center",
}));

export const DAppLogo = styled(Image)(({ theme }) => ({
    width: 64,
    height: 64,
    borderRadius: theme.borderRadiusSm,
}));

export const DAppTag = styled(Typography)(({ theme }) => ({
    color: theme.palette.blue,
}));

export const DAppLinkIcon = styled(IconButton, { children: <ExternalLinkIcon /> })(({ theme }) => ({
    fontSize: 16,
    color: theme.palette.gray[300],
}));
