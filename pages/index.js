import Head from 'next/head';
import Link from "next/link";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";

export default function Home() {
  return (
        <>
          <Typography.Title level={2} classname="heading">
            Global Crypto Statistics
          </Typography.Title>
          <Row>
            <Col span={12}>
              <Statistic title="Total Cryptomonies" value="5"/>
            </Col>
            <Col span={12}>
              <Statistic title="Total Exchanges" value="5"/>
            </Col>
            <Col span={12}>
              <Statistic title="Total Market Cap" value="5"/>
            </Col>
            <Col span={12}>
              <Statistic title="Total 24h Volume" value="5"/>
            </Col>
            <Col span={12}>
              <Statistic title="Total Markets" value="5"/>
            </Col>
          </Row>
        </>
  )
};
