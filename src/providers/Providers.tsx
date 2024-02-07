import { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { ToastProvider } from "@peersyst/react-native-components";
import QueryClientProvider from "../query/QueryClientProvider";
import { ConfigProvider } from "../config";
import { I18nextProvider } from "react-i18next";
console.log("BEFORE IMPORT I18N");
import i18n from "../locale/i18n";
console.log("BEFORE AFTER I18M");

import WalletColorProvider from "module/wallet/component/core/WalletColorProvider/WalletColorProvider";

export default function Providers({ children }: PropsWithChildren<unknown>): JSX.Element {
    // return (
    //     <RecoilRoot>
    //         <SafeAreaProvider>
    //             <I18nextProvider i18n={i18n}>
    //                 <ConfigProvider>
    //                     <ToastProvider>
    //                         <QueryClientProvider>
    //                             <WalletColorProvider>
    //                                 {children}
    //                                 {/*{process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}*/}
    //                             </WalletColorProvider>
    //                         </QueryClientProvider>
    //                     </ToastProvider>
    //                 </ConfigProvider>
    //             </I18nextProvider>
    //         </SafeAreaProvider>
    //     </RecoilRoot>
    // );
    console.log("PROVIDERS");
    return (
        <RecoilRoot>
            <SafeAreaProvider>
                <I18nextProvider i18n={i18n}>
                    <ToastProvider>{children}</ToastProvider>
                </I18nextProvider>
            </SafeAreaProvider>
        </RecoilRoot>
    );
}
