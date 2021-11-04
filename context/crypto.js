import { createContext, useEffect, useState } from "react";
import { RAPID_API_HEADERS, BASE_URL } from "../config";

export const CryptoContext = createContext();

export const CryptoState = ({ children }) => {

    const [loadingCoins, setLoadingCoins] = useState(false);
    const [coinsData, setCoinsData] = useState({ });

    const getCoins = async () => {
        const options = {
            method: 'GET', headers: RAPID_API_HEADERS
        };
        try {
            setLoadingCoins(true);
            const response = await fetch(`${BASE_URL}/coins`, options);
            const data = await response.json();
            if(response.ok) {
                // console.log(data);
                setCoinsData(data);
                setLoadingCoins(false);
            } else {
                setLoadingCoins(false);
                return null;
            }
        } catch (e) {
            console.log(e);
            setLoadingCoins(false);
        }
    };

    useEffect(() => getCoins(), []);

    return (
        <CryptoContext.Provider value={{
            loadingCoins,
            coinsData

        }}>
            { children }
        </CryptoContext.Provider>
    )

};