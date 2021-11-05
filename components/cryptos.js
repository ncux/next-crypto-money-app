import { useContext, useEffect, useState } from "react";
import { RAPID_API_BASE_URL, RAPID_API_HEADERS } from "../config";
import { CryptoContext } from "../context/crypto";

export default function Cryptos() {

    const { coinsData } = useContext(CryptoContext);

    return (
        <>

        </>
    )

}