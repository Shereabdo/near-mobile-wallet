import { DashboardNavigator, DashboardScreens } from "module/dashboard/DashboardNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "stack-navigator";
import { AuthNavigator } from "module/auth/navigation/AuthNavigator";

const Navigator = (): JSX.Element => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"Loader"} screenOptions={{ headerShown: false }}>
            {/* TODO: remove dashboard navigator */}
            {DashboardNavigator}
            {AuthNavigator}
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigator;
