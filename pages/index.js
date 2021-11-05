import Head from 'next/head';
import Link from "next/link";
import { useContext, useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { CryptoContext } from "../context/crypto";

export default function Home() {

      const { coinsData, getCoins, getNews, newsData, loadingNews, loadingCoins } = useContext(CryptoContext);

      useEffect(() => {
          getCoins();
      }, []);

      useEffect(() => {
          getNews();
      }, []);

      if(!coinsData?.data) return (<h1>Loading...</h1>);

      if(loadingCoins || loadingNews) return (<h1>Loading...</h1>);

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
                  <Statistic title="Total Cryptomonies" value={ coinsData?.data?.stats?.total } />
                </Col>
                <Col span={12}>
                  <Statistic title="Total Exchanges" value={ coinsData?.data?.stats?.totalExchanges } />
                </Col>
                <Col span={12}>
                  <Statistic title="Total Market Cap" value={ millify(coinsData?.data?.stats?.totalMarketCap) } />
                </Col>
                <Col span={12}>
                  <Statistic title="Total 24h Volume" value={ coinsData?.data?.stats?.total24hVolume } />
                </Col>
                <Col span={12}>
                  <Statistic title="Total Markets" value={ coinsData?.data?.stats?.totalMarkets } />
                </Col>
              </Row>

                 <div className="home-heading-container">
                      <Typography.Title level={2} classNama="home-title">Top 10 CryptoMonies Today</Typography.Title>

                     <br />

                     <Row gutter={[32, 32]} className="crypto-card-container">
                         {
                             coinsData?.data?.coins?.length > 0 ? (coinsData?.data?.coins?.slice(0, 10).map((coin, i) => (
                                 <Col key={coin.id} xs={24} sm={12} lg={6} className="crypto-card">
                                     <Link href={`/crypto/${coin.id}`}>
                                         <Card title={`${coin.name} | ${coin.symbol}`} extra={ <img src={`${coin.iconUrl}`} className="crypto-image" /> } hoverable>
                                             <p>Price: { millify(coin.price) }</p>
                                             <p>Market Cap: { millify(coin.marketCap) }</p>
                                             <p>Daily Change: { millify(coin.change) }%</p>
                                         </Card>
                                     </Link>
                                 </Col>
                             ))) : (<h2>Loading coin data...</h2>)
                         }
                     </Row>

                     <br />

                      <Typography.Title level={3} classNama="show-more"><Link href={`/cryptos`}>Show More</Link></Typography.Title>
                 </div>


                <div className="home-heading-container">
                    <Typography.Title level={2} classNama="home-title">Latest CryptoMoney News</Typography.Title>

                    <Row gutter={[24, 24]}>
                        {
                            newsData?.length> 0 ? (newsData.slice(0, 6).map((item, i) => (
                                <Col key={i} xs={24} sm={12} lg={8} >
                                    <Card className="news-card" hoverable>
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            <div className="news-image-container">
                                                <Typography.Title className="news-title" level={4}>{ item.name }</Typography.Title>
                                                <img src={item?.image?.thumbnail?.contentUrl} alt={`image`} />
                                            </div>
                                            <p>{ item?.description?.length > 100 ? item.description.substring(0, 100) : item?.description }</p>
                                        </a>
                                    </Card>
                                </Col>
                            ))) : (<h2>Loading news...</h2>)
                        }
                    </Row>

                    <Typography.Title level={3} classNama="show-more"><Link href={`/news`}>Show More</Link></Typography.Title>
                </div>
            </>
      )

};
