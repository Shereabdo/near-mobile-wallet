import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { NotificationProps } from "./Notification";

export const NotificationRoot = styled(View)(() => ({
    position: "relative",
}))

export const AlertCircle = styled(View)<NotificationProps>(({ hasNotifications, theme }) => ({
    position: "absolute",
    top: -2,
    right: -3,
    width: 12,
    height:12,
    borderRadius:50,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: hasNotifications ? theme.palette.red : undefined,
}))