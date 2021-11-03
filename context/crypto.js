import { createContext, useEffect, useReducer } from "react";
import { Reducer } from "./reducer";
import { RAPID_API_HEADERS, BASE_URL } from "../config";

import {
    SET_LOADING,
} from "./types";

const GlobalState = {
    loadingCrypto: false,
};

export const CryptoContext = createContext(GlobalState);

export const CryptoState = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, GlobalState);


    return (
        <CryptoContext.Provider value={{
            loading: state.loading,

        }}>
            { children }
        </CryptoContext.Provider>
    )

};