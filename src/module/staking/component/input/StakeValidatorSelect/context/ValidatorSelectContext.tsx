import { createContext } from "react";
import { Validator } from "near-peersyst-sdk";

export interface ValidatorSelectContextInterface {
    validators: Validator[] | undefined;
    isLoading: boolean;
    onSelected: (validator: Validator) => void;
}

export const ValidatorSelectContext = createContext<ValidatorSelectContextInterface>({
    validators: [],
    isLoading: false,
    onSelected: () => {},
});

export const ValidatorSelectProvider = ValidatorSelectContext.Provider;
export const ValidatorSelectConsumer = ValidatorSelectContext.Consumer;
