import Head from 'next/head'
import Link from 'next/link';
import { useContext, useEffect, useState } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { CryptoContext } from "../../context/crypto";

export default function CryptosPage() {

    const [displayCoins, setDisplayCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const { coinsData, getCoins } = useContext(CryptoContext);

    useEffect(() => {
        getCoins();
        if(coinsData?.data?.coins?.length > 0) {
            setDisplayCoins(coinsData?.data?.coins);
        }
    }, []);

    useEffect(() => {
        if(coinsData?.data?.coins?.length > 0 && searchTerm) {
            setDisplayCoins([...coinsData?.data?.coins?.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))]);
        } else {
            setDisplayCoins(coinsData?.data?.coins);
        }
    }, [coinsData, searchTerm]);

    if(!coinsData?.data?.coins?.length > 0) return (<h1>Loading...</h1>);

    return (
        <>
            <Head>
                <title>Crypto Money App | Currencies</title>
                <meta name="description" content="Information about crypto currencies - powered by Rapid API" />
                <meta name="keywords" content={ `crypto currency currencies coins api` } />
            </Head>
            <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Cryptos</h1>
            <div className="search-crypto">
                <Input placeholder="Search currency" onChange={ event => setSearchTerm(event.target.value) } value={ searchTerm } />
            </div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    displayCoins?.length > 0 && displayCoins.map((coin, i) => (
                        <Col key={coin.id} xs={24} sm={12} lg={6} className="crypto-card">
                            <Link href={`/cryptos/${coin.id}`}>
                                <Card title={`${coin.name} | ${coin.symbol}`} extra={ <img src={`${coin.iconUrl}`} className="crypto-image" /> } hoverable>
                                    <p>Price: { millify(coin.price) }</p>
                                    <p>Market Cap: { millify(coin.marketCap) }</p>
                                    <p>Daily Change: { millify(coin.change) }%</p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
};
