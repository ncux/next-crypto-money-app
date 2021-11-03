import {
    SET_LOADING,
} from "./types";


export const Reducer = (state, { type }) => {

    switch (type) {

        case SET_LOADING:
            return { ...state,
                loadingCrypto: true
            };

        default:
            return state;
    }
};

