import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { RAPID_API_BASE_URL, RAPID_API_HEADERS } from "../config";

export default function CryptosPage({ coins }) {

    const [displayCoins, setDisplayCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    if(!coins?.length) return (<h1>Loading...</h1>);

    useEffect(() => {
        if(coins?.length > 0) {
            setDisplayCoins(coins);
        }
        if(coins?.length > 0 && searchTerm) {
            setDisplayCoins([...coins.filter(coin => coin?.name.toLowerCase().includes(searchTerm.toLowerCase()))]);
        }

    }, [coins, searchTerm]);

    return (
        <>
            <Head>
                <title>Crypto Money App | Currencies</title>
                <meta name="description" content="Information about crypto currencies - powered by Rapid API" />
                <meta name="keywords" content={ `crypto currency currencies coins api` } />
            </Head>
            <h2>Cryptos Page</h2>
            <div className="search-crypto">
                <Input placeholder="Search currency" onChange={ event => setSearchTerm(event.target.value) } value={ searchTerm } />
            </div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    displayCoins.map((coin, i) => (
                        <Col key={coin.id} xs={24} sm={12} lg={6} className="crypto-card">
                            <Link href={`/crypto/${coin.id}`}>
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

// export async function getServerSideProps(context) {
//
//     const options = {
//         method: 'GET', headers: RAPID_API_HEADERS
//     };
//
//     try {
//         const response = await fetch(`${RAPID_API_BASE_URL}/coins`, options);
//         const data = await response.json();
//         if(response.ok) {
//             return {
//                 props: { coins: data?.data?.coins }
//             }
//         } else {
//             return null;
//         }
//     } catch (e) {
//         console.log(e);
//     }
//
//
// }
