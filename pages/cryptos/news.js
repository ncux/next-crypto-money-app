import Head from 'next/head'
import { useContext, useEffect } from "react";
import { Avatar, Card, Typography, Row, Col } from "antd";
import moment from "moment";
import { CryptoContext } from "../../context/crypto";

export default function NewsPage() {

    const { getNews, newsData: news, } = useContext(CryptoContext);

    useEffect(() => {
        getNews();
    }, []);

    if(!news?.length > 0) return (<h1>Loading...</h1>);

    return (
        <>
            <Head>
                <title>Crypto Money App | News</title>
                <meta name="description" content="Information about crypto currencies - powered by Rapid API" />
                <meta name="keywords" content={ `crypto currency currencies coins api` } />
            </Head>
            <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Latest Crypto Money News</h1>
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
                                    <div className="provider-container">
                                        <div>
                                            <Avatar src={ item.provider[0]?.image?.thumbnail?.contentUrl } alt="Image" />
                                            <Typography.Text className="provider-name">{ item.provider[0]?.name }</Typography.Text>
                                        </div>
                                        <Typography.Text>{ moment(item.datePuplished).startOf('ss').fromNow() }</Typography.Text>
                                    </div>
                                </a>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
};
