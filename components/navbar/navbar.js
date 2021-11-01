import Link from "next/link";
import Image from "next/image";
import { Avatar, Button, Menu, Typography } from "antd";
import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import classes from "./navbar.module.css";

export default function Navbar() {

    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <Image src="/images/cryptocurrency.png" width="50" height="50" />
                <Typography.Title level={2} className={classes.logo}>
                    <Link href="/">CryptoMoney</Link>
                </Typography.Title>
                {/*<Button className={classes.menuControlContainer}>*/}

                {/*</Button>*/}
                <Menu theme="dark">
                    <Menu.Item icon={ <HomeOutlined /> }>
                        <Link href={`/`}>Home</Link>
                    </Menu.Item>
                </Menu>

            </div>

        </div>
    );
};