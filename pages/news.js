import Head from 'next/head'
import { useEffect, useState } from "react";
import { Avatar, Card, Select, Typography, Row, Col } from "antd";
import moment from "moment";
import { BING_API_URL, BING_API_HEADERS } from "../config";

export default function NewsPage({ news }) {

    if(!news?.length) return (<h1>Loading...</h1>);

    return (
        <>
            <Head>
                <title>Crypto Money App | News</title>
                <meta name="description" content="Information about crypto currencies - powered by Rapid API" />
                <meta name="keywords" content={ `crypto currency currencies coins api` } />
            </Head>
            <Row gutter={[24, 24]}>
                {
                    news.map((item, i) => (
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
                    ))
                }
            </Row>
        </>
    )
};

// export async function getServerSideProps(context) {
//
//     const newsCategory = 'cryptocurrency';
//
//     const newsUrl = `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=20`;
//
//     const options = {
//         method: 'GET', headers: BING_API_HEADERS
//     };
//
//     try {
//         const response = await fetch(`${BING_API_URL}/${newsUrl}`, options);
//         const data = await response.json();
//         if(response.ok) {
//             return {
//                 props: { news: data?.value }
//             }
//         } else {
//             return null;
//         }
//     } catch (e) {
//         console.log(e);
//     }
//
// }

