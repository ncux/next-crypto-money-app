import Link from "next/link";
import { Space, Typography } from "antd";

export default function Footer() {

    return (
        <>
            <Typography.Title level={5} style={{ textAlign: 'center' }}>
                Copyright &copy; CryptoMoney App 2021 <br />
                All Right Reserved
            </Typography.Title>
            <Space>
                <Link href='/'>Home</Link>
                <Link href={`/cryptos`}>Cryptos</Link>
                <Link href={`/exchanges`}>Exchanges</Link>
                <Link href={`/news`}>News</Link>
            </Space>
        </>
    );
};