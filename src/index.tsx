// Always import the module where the polyfills are defined.
import "./polyfills";

import "./module/api/OpenApiConfig";

import useCachedResources from "module/common/hook/useCachedResources";

import Navigator from "./navigation/Navigator";
import { useLoad } from "module/common/query/useLoad";
import LogoPage from "module/common/component/layout/LogoPage/LogoPage";
import { Suspense } from "@peersyst/react-native-components";

import settingsState from "module/settings/state/SettingsState";
import { LogBox, Platform, UIManager } from "react-native";
import Providers from "./providers/Providers";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { i18nextInitializationPromise } from "locale";
import { useRecoilValue } from "recoil";

if (typeof BigInt === "undefined") global.BigInt = require("big-integer");

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

LogBox.ignoreLogs(["Setting a timer"]); // https://github.com/facebook/react-native/issues/12981#issuecomment-652745831
LogBox.ignoreLogs(["Require cycle:"]); // Consider refactoring to remove the need for a cycle
LogBox.ignoreLogs(["new NativeEventEmitter"]); // Warning from expo-clipboard (React 18)
LogBox.ignoreLogs(["Require cycles"]);

function App(): JSX.Element {
    const loading = useLoad();

    const { loading: loadingSettings = false } = useRecoilValue(settingsState);

    return (
        <Suspense fallback={<LogoPage />} isLoading={loading || loadingSettings}>
            <Navigator />
        </Suspense>
    );
}

export default function Root(): JSX.Element | null {
    const isLoadingComplete = useCachedResources();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        i18nextInitializationPromise.then(() => {
            setLoaded(true);
        });
    }, []);

    return (
        // `GestureHandlerRootView` enables all `react-native-gesture-handler` features.
        // For example, `Swipeable` from `react-native-gesture-handler` will not trigger `Touchable`'s `onPress`.
        isLoadingComplete && loaded ? (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Providers>
                    <App />
                </Providers>
            </GestureHandlerRootView>
        ) : null
    );
}
