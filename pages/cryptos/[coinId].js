import Head from 'next/head'
import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { RAPID_API_HEADERS, RAPID_API_BASE_URL } from "../../config";

export default function CoinDetailsPage({ data }) {

    const { base, coin } = data;

    const [timePeriod, setTimePeriod] = useState('7d');

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${coin.price && millify(coin.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: coin.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${coin.volume && millify(coin.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${coin.marketCap && millify(coin.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(coin.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: coin.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: coin.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: coin.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${millify(coin.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${millify(coin.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    ];

    return (
        <>
            <Head>
                <title>Crypto Money App | { coin?.name }</title>
                <meta name="description" content="Information about crypto currencies - powered by Rapid API" />
                <meta name="keywords" content={ `crypto currency currencies coins api` } />
            </Head>
            <Col className="coin-detail-container">
                <Col className="coin-heading-container">
                    <Typography.Title level={2} className="coin-name">{ coin?.name } | { coin?.symbol } Price</Typography.Title>
                    <p>{ coin?.name } live price in US dollars. See value statistics, market cap and supply.</p>
                </Col>

            </Col>
        </>
    )
};

export async function getServerSideProps(context) {

    const { params } = context;

    const options = {
        method: 'GET', headers: RAPID_API_HEADERS
    };

    try {
        const response = await fetch(`${RAPID_API_BASE_URL}/coin/${params?.coinId}`, options);
        const data = await response.json();
        if(response.ok) {
            return {
                props: { data: data.data }
            };
        } else {
            return {
                props: {  }
            };
        }
    } catch (e) {
        console.log(e);
    }

}

