import Head from 'next/head';
import Link from "next/link";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { BASE_URL, RAPID_API_HEADERS } from "../config";
import CryptosPage from "./cryptos";
import NewsPage from "./news";

export default function Home({ data }) {

  if(!data) return (<h1>Loading...</h1>);

  const globalStats = data?.data?.stats;

  return (
        <>
            <Head>
                <title>Crypto Money App | Home</title>
                <meta name="description" content="Information about crypto currencies - powered by Rapid API" />
                <meta name="keywords" content={ `crypto currency currencies coins api` } />
            </Head>
          <Typography.Title level={2} classname="heading">
            Global Crypto Statistics
          </Typography.Title>
          <Row>
            <Col span={12}>
              <Statistic title="Total Cryptomonies" value={ globalStats.total } />
            </Col>
            <Col span={12}>
              <Statistic title="Total Exchanges" value={ globalStats.totalExchanges } />
            </Col>
            <Col span={12}>
              <Statistic title="Total Market Cap" value={ millify(globalStats.totalMarketCap) } />
            </Col>
            <Col span={12}>
              <Statistic title="Total 24h Volume" value={ millify(globalStats.total24hVolume) } />
            </Col>
            <Col span={12}>
              <Statistic title="Total Markets" value={ globalStats.totalMarkets } />
            </Col>
          </Row>

             <div className="home-heading-container">
                  <Typography.Title level={2} classNama="home-title">Top 10 CryptoMonies Today</Typography.Title>
                  <Typography.Title level={3} classNama="show-more"><Link href={`/cryptos`}>Show More</Link></Typography.Title>
             </div>
            <CryptosPage simplified={ true } />
            <div className="home-heading-container">
                <Typography.Title level={2} classNama="home-title">Latest CryptoMoney News</Typography.Title>
                <Typography.Title level={3} classNama="show-more"><Link href={`/news`}>Show More</Link></Typography.Title>
            </div>
            <NewsPage simplified />
        </>
  )
};

export async function getServerSideProps(context) {

    const options = {
        method: 'GET', headers: RAPID_API_HEADERS
    };

    try {
        const response = await fetch(`${BASE_URL}/coins`, options);
        const data = await response.json();
        if(response.ok) {
            return {
                props: { data }
            }
        } else {
            return null;
        }
    } catch (e) {
        console.log(e);
    }


}
