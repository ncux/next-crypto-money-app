import { createContext, useEffect, useState } from "react";
import {RAPID_API_HEADERS, RAPID_API_BASE_URL, BING_API_HEADERS, BING_API_URL} from "../config";

export const CryptoContext = createContext();

export const CryptoState = ({ children }) => {

    const [loadingCoins, setLoadingCoins] = useState(false);
    const [coinsData, setCoinsData] = useState({ });
    const [loadingNews, setLoadingNews] = useState(false);
    const [newsData, setNewsData] = useState([]);

    const getCoins = async () => {
        const options = {
            method: 'GET', headers: RAPID_API_HEADERS
        };
        try {
            setLoadingCoins(true);
            const response = await fetch(`${RAPID_API_BASE_URL}/coins`, options);
            const data = await response.json();
            if(response.ok) {
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

    const getNews = async () => {
        const newsCategory = 'cryptocurrency';
        const newsUrl = `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=20`;
        const options = {
            method: 'GET', headers: BING_API_HEADERS
        };

        try {
            setLoadingNews(true);
            const response = await fetch(`${BING_API_URL}/${newsUrl}`, options);
            const data = await response.json();
            if(response.ok) {
                setNewsData(data?.value);
                setLoadingNews(false);
            } else {
                setLoadingNews(false);
                return null;
            }
        } catch (e) {
            console.log(e);
            setLoadingNews(false);
        }
    };

    return (
        <CryptoContext.Provider value={{
            loadingCoins,
            loadingNews,
            coinsData,
            newsData,
            getCoins,
            getNews
        }}>
            { children }
        </CryptoContext.Provider>
    )

};